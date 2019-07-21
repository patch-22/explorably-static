const Mustache = require('mustache')
const fs = require('fs-extra')
const path = require('path')

function getTemplate() {
  const templatePath = path.join(__dirname, '../layout/default.html')
  return fs.readFileSync(templatePath, 'utf8')
}

function render(data) {
  const template = getTemplate()
  return Mustache.render(template, data)
}

module.exports = render
