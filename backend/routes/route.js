const express = require('express');
const router = express.Router();

const routeController = require ('../controllers/routeController')

router.get('/', routeController.Index);

module.exports = router