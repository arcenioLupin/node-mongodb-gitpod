const {Schema,model} = require('mongoose');

const UsuarioSchema = new Schema({
    usuario :{
        type : String,
        required : true
    },

    password : String
})

 module.exports = model('usuario',UsuarioSchema);