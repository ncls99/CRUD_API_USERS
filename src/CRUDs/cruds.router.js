const router = require('express').Router()

const usersService = require('./cruds.services')

router.get('/users', usersService.getAllUsers)
router.post('/users', usersService.postNewUser)

router.get('/users/:id', usersService.getUserById)

module.exports = router