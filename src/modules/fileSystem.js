const fs = require('fs');
const path = require('path');

function readFile(filePath) {
  return fs.promises.readFile(filePath, 'utf-8');
}

function writeFile(filePath, data) {
  return fs.promises.writeFile(filePath, data, 'utf-8');
}

function deleteFile(filePath) {
  return fs.promises.unlink(filePath);
}

module.exports = { readFile, writeFile, deleteFile };
