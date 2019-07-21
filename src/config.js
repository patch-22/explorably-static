const yaml = require('js-yaml')
const fs = require('fs-extra')

const STORY_CONFIG_FILE = './story.yaml'

/**
 * Get the configuration file for the story in the
 * current directory.
 *
 * @return {Object} Parsed configuration file
 */
module.exports = async () => {
  const storyFile = await fs.readFile(STORY_CONFIG_FILE, 'utf8')
  const storyConfig = yaml.load(storyFile)

  return storyConfig
}
