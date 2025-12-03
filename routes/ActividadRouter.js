import express from 'express';
import { 
        crearActividad, 
        listarActividades, 
        getActById,
        deleteActById,
        updeteActById 
    } from '../controllers/ActividadController.js';
const router = express.Router();

router.get('/', validarJWT, listarActividades);
router.get('/:id', getActById);
router.delete('/:id', deleteActById);
router.put('/:id', updeteActById);
router.post('/', validarJWT, crearActividad);

export default router;
