const mongoose = require('mongoose')
const mediaSchema = require('./Media')

const Media = mongoose.model('Media', mediaSchema)

module.exports = {
  Media
}
