const getConfig = require('./config')
const io = require('./io')
const render = require('./render')

module.exports = async () => {
  const config = await getConfig()

  const publicDir = config.public || './public'
  const assetsDir = config.assets || './static'

  await io.reset(publicDir)
  await io.copyStaticAssets(assetsDir, publicDir)

  const chapters = config.chapters || []
  for (let i = 0; i < chapters.length; i++) {
    const html = render.renderChapter(chapters[i])
    await io.outputChapter(publicDir, chapters[i], html)
  }
}
