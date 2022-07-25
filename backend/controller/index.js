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
    const medias = await Media.find()
    res.send(medias)
  } catch (error) {
    throw error
  }
}

const getMediaById = async (req, res) => {
  try {
    const media = await Media.findById(req.params.id)
    return res.status(200).json({ media })
  } catch (error) {
    throw error
  }
}

const createMedia = async (req, res) => {
  try {
    const newMedia = await Media.create(req.body)
    await newMedia.save()
    return res.status(201).json({ newMedia })
  } catch (error) {
    throw error
  }
}

const updateMedia = async (req, res) => {
  try {
    const mediaId = req.params.objectId
    const updatedMedia = await Media.update(req.body, {
      where: { _id: mediaId },
      returning: true
    })
    res.send(updatedMedia)
  } catch (error) {
    throw error
  }
}

const deleteMedia = async (req, res) => {
  try {
    const mediaId = req.params.objectId
    await Media.destroy({ where: { id: mediaId } })
    res.send({ msg: 'object with ID ${mediaId} deleted' })
  } catch (error) {
    throw error
  }
}
module.exports = {
  getMedia,
  getMediaById,
  createMedia,
  updateMedia,
  deleteMedia
}
