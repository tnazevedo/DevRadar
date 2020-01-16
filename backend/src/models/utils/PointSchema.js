const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
  type:{
    enum:['Point'],
    required:true,
  },
  coordinates:{
    type:[Number],
    required:true,
  },
});

module.exports = PointSchema;
