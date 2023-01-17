'use strict'

const generateIndex = require('./generate-index.js')
const { resolveConfig: resolveAsciiDocConfig } = require('@antora/asciidoc-loader')
const convertDocuments = require('@antora/document-converter')

function lunrAntoraExtension(context) {
    const logger = context.getLogger('lunrAntoraExtension')

    logger.debug('Registering Antora extension functions')

    context.on('contextStarted', () => {
        const delegate = context.getFunctions().publishSite

        logger.debug('Extending function [publishSite]')

        context.replaceFunctions({
            publishSite(playbook, catalogs) {
                const [contentCatalog, uiCatalog, siteCatalog] = catalogs

                const asciidocConfig = resolveAsciiDocConfig(playbook)
                const pages = convertDocuments(contentCatalog, asciidocConfig)

                const index = generateIndex(playbook, pages, contentCatalog, playbook.env)

                const siteFiles = siteCatalog.getFiles()
                siteFiles.push(generateIndex.createIndexFile(index))

                return delegate.call(this, playbook, [contentCatalog, uiCatalog, { getFiles: () => siteFiles }])
            }
        })
    })
}

module.exports.register = lunrAntoraExtension