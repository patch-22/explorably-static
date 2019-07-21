const getConfig = require('./config')
const io = require('./io')
const render = require('./render')

module.exports = async () => {
  const config = await getConfig()

  const publicDir = config.public || './public'
  const assetsDir = config.assets || './static'

  await io.reset(publicDir)
  await io.copyStaticAssets(assetsDir, publicDir)

  const data = render.parseFile('./chapters/basic-probability/content.md')
  console.log(render.render(data.content))
}
