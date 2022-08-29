const router = require('express').Router();
const {index, music,about,contac,admin,login} = require('../controllers/mainController');

const accesAdmin = require('../middlewares/accesAdmin');
router
    .get('/', index)
    .get('/about', about)
    .get('/contac', contac)
    .get('/music', music)
    .get('/admin', accesAdmin, admin)
    .get('/login', login)


module.exports = router