/* copy distribution files to storybook */
/* assuming script runs in ./scripts directory! */
const fs = require('fs-extra');
const path = require('path');

const copyDirs = [
  '../dist/pax'
];

const destDir = path.join(__dirname, '../../static/pax/');

copyDirs.forEach(dir => {
  const copyDir = path.join(__dirname, dir);
  try {
    fs.copySync(copyDir, destDir);
    console.log('copied dist successfully');
  } catch (err) {
    console.error(err);
  }
});
