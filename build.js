import fs from 'fs';
import { PRESET_RULES } from './config.js';

const config = fs.readFileSync('config.js', 'utf-8'); // 读取配置文件
const index = fs.readFileSync('index.js', 'utf-8'); // 读取脚本本体

// 生成 @include 注释
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
// @version      1.6.3
// @description  把访问过的链接染色成灰色
// @author       chesha1
// @license      GPL-3.0-only
${includeDeclarations}
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @run-at       document-end
// ==/UserScript==
${config}
${index}`;

fs.writeFileSync('bundle.user.js', template);
