const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')

//  This function read all files in de folder especified that match the file ext
exports.pages = function (options) {

  const files = fs.readdirSync(options.srcDir)

  const pages = files.filter((fileName) => fileName.indexOf('.' + options.filesExt) != -1).map(fileName => {

    const optionsPlugin = {
      filename: `${fileName.split('.')[0]}.html`,
      template: `${options.srcDir}/${fileName}`,
      inject: true,
      hash: true
    }

    return new HtmlWebpackPlugin(optionsPlugin)

  })

  return pages
}

