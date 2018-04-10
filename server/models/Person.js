let mongoose = require('mongoose');

mongoose.model('Person', new mongoose.Schema({

  name:{type: String, required:true, minlength:2, maxlength:255}

},{timestamps: true})); 
