const { Router } = require('express');

const {
    realizarVenta
} = require('../controllers/venta.controller');

const router = Router();

router.post('/', realizarVenta);

module.exports = router;