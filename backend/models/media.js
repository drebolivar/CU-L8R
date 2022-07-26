const { Schema } = require('mongoose')

const mediaSchema = new Schema(
  {
    title: { type: String, required: true },
    genre: [{ type: String, required: true }],
    year: { type: String, required: false },
    description: { type: String, required: false },
    platform: [{ type: String, required: false }],
    img: { type: String, required: false },
    mediamark: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = mediaSchema
