const fs = require('fs-extra')
const path = require('path')

async function reset(publicDir) {
  await fs.remove(publicDir)
  await fs.mkdirp(publicDir)
}

async function copyStaticAssets(assetsDir, publicDir) {
  try {
    await fs.copy(assetsDir, publicDir)
  } catch (e) {}

  await fs.copy(path.join(__dirname, '../static'), publicDir)
}

function outputChapter(publicDir, chapterName, html) {
  return fs.outputFile(path.join(publicDir, chapterName, 'index.html'), html)
}

module.exports = { reset, copyStaticAssets, outputChapter }
