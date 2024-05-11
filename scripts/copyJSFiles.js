const fs = require('fs');
const { copy, ensureDirSync } = require('fs-extra');
const path = require('path');

const copyFilesRecursive = (sourceDir, targetDir, fileExtension) => {
  fs.readdirSync(sourceDir).forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);
    if (fs.lstatSync(sourcePath
    ).isDirectory()) {
      ensureDirSync(targetPath);
      copyFilesRecursive(sourcePath, targetPath, fileExtension);
    }
    if (path.extname(file) === fileExtension) {
      copy(sourcePath, targetPath);
    }
  }
  );
}

function copyFiles(sourceDir, targetDir, fileExtension) {
  copyFilesRecursive(sourceDir, targetDir, fileExtension);
}


// Usage
copyFiles('./src', './.build', '.js');