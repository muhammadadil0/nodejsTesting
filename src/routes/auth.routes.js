const express = require('express')
const authController = require('../controllers/auth.controller')

const router = express.Router()


router.post('/create-post',authController.createPost)
router.get('/posts/:keyword',authController.readPost)
module.exports = router;