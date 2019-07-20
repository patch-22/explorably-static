#!/usr/bin/env node

const program = require('commander')
const fs = require('fs-extra')

const version = require('./package.json').version

program.version(version)

// Build the site
program
    .command('build')
    .description('build the story in the current directory')
    .action(() => {
        //
    })

// Create a story
program
    .command('new')
    .description('create a new story in the current directory')
    .action(() => {
        //
    })

program.parse(process.argv)

if (process.argv.length < 3) {
    program.help()
}