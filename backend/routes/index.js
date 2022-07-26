const { Router } = require('express')
const controllers = require('../controller')
const router = Router()

router.get('/', (req, res) => res.send(`Who watches the Watchers?`))

router.get('/media', controllers.getMedia)
router.get('/media/:id', controllers.getMediaById)
router.post('/media', controllers.createMedia)
router.put('/media/:id', controllers.updateMedia)
router.delete('/media/:id', controllers.deleteMedia)
router.patch('/media/:id', controllers.updateMediaGenre)

module.exports = router
