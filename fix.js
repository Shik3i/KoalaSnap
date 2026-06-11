import fs from 'fs';
import { execSync } from 'child_process';

const originalBuffer = execSync('git show HEAD~1:src/main.js');
const original = originalBuffer.toString('utf8');

const svgRegex = /(const SVG = \{[\s\S]*?\n\};)/;
const constantsRegex = /(const GRADIENT_PRESETS = \[[\s\S]*?\n\];[\s\S]*?const GRADIENT_COLORS = \{[\s\S]*?\n\};[\s\S]*?const CHAT_BG_PRESETS = \[[\s\S]*?\n\];[\s\S]*?const APPS = \[[\s\S]*?\n\];)/;

const svgMatch = original.match(svgRegex);
if (svgMatch) {
  fs.writeFileSync('src/icons.js', 'export ' + svgMatch[1], 'utf8');
}

const constMatch = original.match(constantsRegex);
if (constMatch) {
  const exported = constMatch[1].replace(/^const /gm, 'export const ');
  fs.writeFileSync('src/constants.js', exported, 'utf8');
}

let newMain = original.replace(svgRegex, '').replace(constantsRegex, "import { SVG } from './icons.js';\nimport { GRADIENT_PRESETS, GRADIENT_COLORS, CHAT_BG_PRESETS, APPS } from './constants.js';");

fs.writeFileSync('src/main.js', newMain, 'utf8');
