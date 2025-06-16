import { readFileSync, writeFileSync } from 'fs';
import { transformAsync } from '@babel/core';

const config = readFileSync('config.js', 'utf-8'); // 读取配置文件
const index = readFileSync('index.js', 'utf-8'); // 读取脚本本体

// 生成 @include 注释
let PRESET_RULES = null;
const visitor = {
  VariableDeclarator(path) {
    if (path.node.id.name === 'PRESET_RULES') {
      const init = path.node.init;
      if (init.type === 'ObjectExpression') {
        PRESET_RULES = {};
        init.properties.forEach((prop) => {
          const key = prop.key.type === 'StringLiteral' ? prop.key.value : prop.key.name;

          if (prop.value.type === 'ObjectExpression') {
            const value = {};
            prop.value.properties.forEach((subProp) => {
              const subKey = subProp.key.name;

              // 处理数组
              if (subProp.value.type === 'ArrayExpression') {
                value[subKey] = subProp.value.elements.map((element) => {
                  // 处理正则表达式
                  if (element.type === 'RegExpLiteral') {
                    return new RegExp(element.pattern, element.flags);
                  }
                  return element.value;
                });
              }
              else {
                value[subKey] = subProp.value.value;
              }
            });
            PRESET_RULES[key] = value;
          }
        });
      }
    }
  },
};

await transformAsync(config, {
  ast: true,
  plugins: [{ visitor }],
});

const urlPatterns = new Set();
Object.values(PRESET_RULES).forEach((rule) => {
  if (rule.pages && Array.isArray(rule.pages)) {
    rule.pages.forEach(pattern => urlPatterns.add(pattern));
  }
});
const includeDeclarations = Array.from(urlPatterns)
  .map(pattern => '// @include      ' + pattern)
  .join('\n');

// 最终文件的模板
const template
= `// ==UserScript==
// @name         color-visited 对已访问过的链接染色
// @version      1.17.0
// @description  把访问过的链接染色成灰色
// @author       chesha1
// @license      GPL-3.0-only
${includeDeclarations}
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @run-at       document-end
// @noframes
// @homepageURL  https://github.com/chesha1/color-visited
// @supportURL   https://github.com/chesha1/color-visited/issues
// ==/UserScript==
${config}
${index}`;

writeFileSync('bundle.user.js', template);
