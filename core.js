const marked = require('marked')
const glob = require('fast-glob')
const fs = require('fs-extra')
const path = require('path')
const process = require('process')

class Story {
    constructor() {
        this.config = { public: 'public' }
        this.pages = []
        this.output = []
    }

    async build() {
        console.time('Build Time')

        await this.reset()
        await this.read()
        await this.render()
        await this.write()

        console.log(this.output)

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

    async render() {
        for (let i = 0; i < this.pages.length; i++) {
            const html = marked(this.pages[i].data)

            const filePath = path.join(process.cwd(), this.config.public, this.pages[i].file).replace('md', 'html')
            this.output.push({ html, file: filePath })
        }
    }

    async write() {
        const output = []

        for (let i = 0; i < this.output.length; i++) {
            output.push(fs.outputFile(this.output[i].file, this.output[i].html))
        }

        return Promise.all(output)
    }
}

module.exports = { Story }