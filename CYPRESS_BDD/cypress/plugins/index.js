const cucumber = require('cypress-cucmber-preprocessor').default

module.exports = (on, config) => {
    on('file:preprocessor', cucumber)
}