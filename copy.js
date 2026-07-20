const fs = require('fs');
const path = require('path');

const srcFiles = [
  'C:\\Users\\danie\\.gemini\\antigravity-ide\\brain\\2a77875e-12a3-4d2f-855e-913c0c338f45\\public_hero_placeholder_1784486789220.png',
  'C:\\Users\\danie\\.gemini\\antigravity-ide\\brain\\2a77875e-12a3-4d2f-855e-913c0c338f45\\private_hero_placeholder_1784486798218.png',
  'C:\\Users\\danie\\.gemini\\antigravity-ide\\brain\\2a77875e-12a3-4d2f-855e-913c0c338f45\\cover_placeholder_1_1784486806866.png',
  'C:\\Users\\danie\\.gemini\\antigravity-ide\\brain\\2a77875e-12a3-4d2f-855e-913c0c338f45\\cover_placeholder_2_1784486815421.png'
];

const destFiles = [
  'public_hero_placeholder.png',
  'private_hero_placeholder.png',
  'cover-placeholder-1.png',
  'cover-placeholder-2.png'
];

if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}

for (let i = 0; i < srcFiles.length; i++) {
  if (fs.existsSync(srcFiles[i])) {
    fs.copyFileSync(srcFiles[i], path.join('public', destFiles[i]));
    console.log(`Copied ${destFiles[i]}`);
  }
}
