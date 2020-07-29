const {Router} = require('express')

const authController = require('./controller/authController')

const routes = new Router()

routes.get('/sign-in',authController.singin)
routes.get('/sign-up',authController.signUp)

module.exports = routes;