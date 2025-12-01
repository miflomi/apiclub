import express from 'express';
import { 
        crearActividad, 
        listarActividades, 
        getActById,
        deleteActById,
        updeteActById 
    } from '../controllers/ActividadController.js';
const router = express.Router();

router.get('/', listarActividades);
router.get('/:id', getActById);
router.delete('/:id', deleteActById);
router.put('/:id', updeteActById);
router.post('/', crearActividad);

export default router;