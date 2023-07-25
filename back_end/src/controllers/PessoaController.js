const Pessoa = require('../models/Pessoa')
module.exports = {
  async index(req,res){
    const pessoa = await Pessoa.findAll()    
    return  res.json(pessoa)
  }
}