const mongoose = require('mongoose/');

mongoose.connect('mongodb+srv://arcenioLupin:unbueninicio@cluster0-engiy.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('DB is conected'))
.catch( e=> console.log(e));