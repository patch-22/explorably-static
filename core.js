const marked = require('marked')
const glob = require('fast-glob')
const fs = require('fs-extra')

class Story {
    constructor() {
        this.config = { public: 'public' }
        this.pages = []
    }

    async build() {
        console.time('Build Time')

        await this.reset()
        await this.read()

        console.timeEnd('Build Time')
    }

    async reset() {
        await fs.remove(this.config.public)
        await fs.mkdirp(this.config.public)
    }

    async read() {
        const content = await glob('**/*.md')
        for (let i = 0; i < content.length; i++) {
            const file = content[i]
            const data = await fs.readFile(file, 'utf8')
            this.pages.push({ data, file })
        }
    }
}

module.exports = { Story }