var express = require('express');
var router = express.Router();

const ctrlMain = require('../controllers/ctrlMain');
const ctrlMap = require('../controllers/ctrlMap');
const ctrlStuff = require('../controllers/ctrlStuff');
const ctrlClasses = require('../controllers/ctrlClasses');

router.get('/',ctrlMain.index);
router.get('/map',ctrlMap.map);
router.get('/stuff',ctrlStuff.stuff);
router.get('/classes',ctrlClasses.classes);

module.exports = router;
