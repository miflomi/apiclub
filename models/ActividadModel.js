import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const esquema = new Schema({
    nombre: {
        type: String,
        required: [true, "Falta el campo nombre"]
    },
    categoria: {
        type: String,
        required: [true, "Falta el campo categoria"]
    },
    profesor: String,
    dias: String,
    horario: String,
    costo: Number
});

const Actividad = mongoose.model('Actividad', esquema);

export default Actividad;
