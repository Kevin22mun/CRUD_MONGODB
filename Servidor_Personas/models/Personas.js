const mongoose = require('mongoose');

const PersonaSchema = mongoose.Schema({
    primer_nombre: {
        type: String,
        required: true
    },
    segundo_nombre: {
        type: String,
        required: false
    },
    apellido: {
        type: String,
        required: true
    },
    nombre_usuario: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    escuela: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true

    },
    fechaCreacion:{
        type: Date,
        default: Date.now()
    }
 
});


module.exports = mongoose.model('Persona', PersonaSchema);