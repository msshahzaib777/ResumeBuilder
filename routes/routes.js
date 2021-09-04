var express = require('express');
var router = express.Router();

var ResumeController = require('../controllers/ResumeController')

router.get('/', ResumeController.getUsers)

module.exports = router;