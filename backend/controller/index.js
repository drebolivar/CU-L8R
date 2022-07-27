// create our controllers here
//CRUD => Find all, Find by ID, Finding by linked items (publisher>book, user>task,Bond villain>movie)

const { Media } = require('../models')
const { db } = require('mongodb')

//C -> Create (New)
//R -> Read (Find)
//U -> Update (Edit)
//D -> Delete (Remove)

const getMedia = async (req, res) => {
  try {
    const media = await Media.find()
    res.send(media)
  } catch (error) {
    throw error
  }
}

const getMediaById = async (req, res) => {
  try {
    const { id } = req.params
    const media = await Media.findById(id)
    if (media) {
      return res.status(200).json({ media })
    }
    return res.status(404).send('Media with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createMedia = async (req, res) => {
  try {
    const newMedia = await new Media(req.body)
    await newMedia.save()
    return res.status(201).json({ newMedia })
  } catch (error) {
    throw error
  }
}

const updateMedia = async (req, res) => {
  try {
    const media = await Media.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(media)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteMedia = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Media.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Crossed off the list')
    }
    throw new Error('Media not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateMediaMood = async (req, res) => {
  try {
    const newMood = await Media.findByIdAndUpdate(
      { _id: req.params.id },
      { $push: { mood: req.body.mood } }
    )
    res.json({ newMood })
  } catch (error) {
    throw error
  }
}
module.exports = {
  getMedia,
  getMediaById,
  createMedia,
  updateMedia,
  updateMediaMood,
  deleteMedia
}
