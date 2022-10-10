//importar o pacote mongoose
const mongoose = require('mongoose')

const conn = async()=>{
    //mongoAtlas
    const atlas = await mongoose.connect('mongodb+srv://userAC-3tri:tom505160@fiaptecnico.vknqm.mongodb.net/AC3tri') 
} 

module.exports = conn