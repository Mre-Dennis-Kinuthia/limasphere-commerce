const path = require('path')

module.exports = {
  reactStrictMode: true,
  webpack(config, options) {
    config.resolve.alias['@'] = path.join(__dirname, '')
    config.resolve.alias['@client'] = path.join(__dirname, 'client')
    return config
  }
}
