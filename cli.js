#!/usr/bin/env node

const program = require('commander')
const build = require('./src/build')

program.version(require('./package.json').version)

program
  .command('build')
  .description('build the story in the current directory')
  .action(build)

program.parse(process.argv)

if (process.argv.length < 3) {
  program.help()
}
