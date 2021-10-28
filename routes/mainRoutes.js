const express = require('express');
const mainController = require('../controllers/mainControler')
const router = express.Router({ mergeParams: true });

router.get('/',mainController.getMainPage);
router.post('/addShopping', mainController.addShopping);

module.exports = router;