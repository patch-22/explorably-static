const componentExtension = {
  type: 'lang',
  regex: /\[\[(.+)\]\]/g,
  replace: '<div class="INTERNAL_REPLACE_DIV" component="$1"></div>'
}

module.exports = componentExtension
