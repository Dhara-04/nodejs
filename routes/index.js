var express = require('express');
var router = express.Router();
var dhara = require('../controller/usercontroller');

router.post('/',dhara.insert);
router.get('/',dhara.get_data);
router.get('/update/:id',dhara.get_update_data);
router.post('/update/:id',dhara.update_data);
router.get('/delete/:id',dhara.delete_data);


module.exports = router;