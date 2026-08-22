const {Router} = require('express');
const {
	getCategorias,
	getcategoriaById,
	createcategoria,
	createcategorias,
	updatecategoria,
	deletecategoria,
	new_bulkes
} = require('../controllers/categorias.controllerr');


const router = Router();

router.get('/categorias', getCategorias);
router.get('/categorias/:id', getcategoriaById);
router.post('/categorias', createcategoria);
router.post('/categorias/bulk', createcategorias);
router.put('/categorias/:id', updatecategoria);
router.delete('/categorias/:id', deletecategoria);
router.get('/new_bulkes', new_bulkes);
module.exports = router;