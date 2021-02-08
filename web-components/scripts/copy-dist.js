const fs = require('fs-extra');
const path = require('path');

const copyDirs = [
  'dist/pax'
];

const destDir = path.join(__dirname, '../../docs/static/pax/');

copyDirs.forEach(dir => {
  const copyDir = path.join(__dirname, '../', dir);
  try {
    fs.copySync(copyDir, destDir);
    console.log('copied dist successfully');
  } catch (err) {
    console.error(err);
  }
});
