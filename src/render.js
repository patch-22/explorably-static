const matter = require('gray-matter')
const marked = require('marked')

function parseFile(path) {
  const { content, data } = matter.read(path)
  return { content, data }
}

function render(markdown) {
  return marked(markdown)
}

module.exports = { parseFile, render }
