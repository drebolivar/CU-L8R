const { Router } = require('express')
const controller = require('../controller')
const router = Router()

router.get('/', (req, res) => res.send(`Who watches the Watchers?`))

router.get('/media', controller.getMedia)
router.get('/media/:id', controller.getMediaById)
router.post('/media', controller.createMedia)
router.put('/media/:id', controller.updateMedia)
router.delete('/media/:id', controller.deleteMedia)

module.exports = router
