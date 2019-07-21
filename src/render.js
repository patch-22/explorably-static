const matter = require('gray-matter')
const showdown = require('showdown')
const renderTemplate = require('./templates')
const componentExtension = require('./component-extension')

const converter = new showdown.Converter({
  extensions: [componentExtension]
})

function parseFile(path) {
  const { content, data } = matter.read(path)
  return { content, data }
}

function render({ content, data }) {
  const contentHtml = converter.makeHtml(content)

  return renderTemplate({
    title: data.title,
    description: data.description,
    content: contentHtml,
    scripts: data.scripts.map(url => ({ url }))
  })
}

function renderChapter(chapter) {
  const data = parseFile(`./chapters/${chapter}/content.md`)
  return render(data)
}

module.exports = { parseFile, render, renderChapter }
