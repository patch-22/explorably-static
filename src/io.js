const fs = require('fs-extra')

async function reset(publicDir) {
  await fs.remove(publicDir)
  await fs.mkdirp(publicDir)
}

function copyStaticAssets(assetsDir, publicDir) {
  return fs.copy(assetsDir, publicDir)
}

module.exports = { reset, copyStaticAssets }
