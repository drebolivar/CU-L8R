const { Schema } = require('mongoose')

const mediaSchema = new Schema(
  {
    title: { type: String, required: true },
    mood: { type: String, required: true },
    platform: { type: String, required: false },
    notes: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = mediaSchema
