const {Schema,model} = require('mongoose');

const TaskSchema = new Schema({
    task :{
        type : String,
        required : true
    },

    descripcion : String
})

 module.exports = model('task',TaskSchema);