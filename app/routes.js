var express = require('express'),
    router = express.Router(),
    path = require('path'),
    mainController = require('./controller/main-controller.js');

//Client/Server Handler:
var landingPage = mainController.landingPage,
    about = mainController.about,
    contactGET = mainController.contactGET,
    allmessagesGET = mainController.allmessagesGET,
    contactPOST = mainController.contactPOST;

//GET
router.get('/', landingPage);
router.get('/about', about);
router.get('/contact', contactGET);
router.get('/allmessages', allmessagesGET);

//POST
router.post('/contact', contactPOST);


module.exports = router;
