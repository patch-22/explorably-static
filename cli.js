#!/usr/bin/env node

const program = require('commander')
const fs = require('fs-extra')
const core = require('./core')

const version = require('./package.json').version

program.version(version)

// Build the site
program
    .command('build')
    .description('build the story in the current directory')
    .action(build)

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

function build() {
    const story = new core.Story()
    story
        .build()
        .catch(err => console.error(err))
}