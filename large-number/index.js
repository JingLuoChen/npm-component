if (process.env.NODE_ENV === 'production') {
    module.exports = require('./dist/large-number.min')
} else {
    module.exports = require('./dist/large-number')
}