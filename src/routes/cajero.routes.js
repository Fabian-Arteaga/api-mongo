const { Router } = require('express');

const {
    getCajeros,
    getCajerosId,
    new_bulkess
} = require('../controllers/cajero.controller');

const router = Router();

router.get('/cajeros', getCajeros);
router.get('/cajeros/:id', getCajerosId);
router.get('/new_bulkess', new_bulkess);

module.exports = router;