const express = require('express')
const friendsRouter = express.Router();

const friendsController = require('../controllers/friends')

//middleware
friendsRouter.use((req, res, next) =>{
    console.log('ip address', req.ip)
    next();
})




module.exports = friendsRouter
