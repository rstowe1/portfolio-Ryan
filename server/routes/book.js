const express = require('express');
const router = express.Router();

const bookCtrl = require('../controllers/book');

router.post('', bookCtrl.saveBook);

router.get('', bookCtrl.getBooks);

router.patch(':id', bookCtrl.updateBook);

router.delete(':id', bookCtrl.deletBook);

module.exports = router;