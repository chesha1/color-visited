import fs from 'fs';

const config = fs.readFileSync('config.js', 'utf-8');
const index = fs.readFileSync('index.js', 'utf-8');

const template = `
// ==UserScript==
// @name         color-visited 对已访问过的链接染色
// @version      1.6.1
// @description  把访问过的链接染色成灰色
// @author       chesha1
// @license      GPL-3.0-only
// @match        *://*/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @run-at       document-end
// ==/UserScript==

${config}

${index}
`;

fs.writeFileSync('bundle.user.js', template);
