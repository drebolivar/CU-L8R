const mongoose = require('mongoose')
const mediaSchema = require('./media.js')

const Media = mongoose.model('Media', mediaSchema)

module.exports = {
  Media
}
