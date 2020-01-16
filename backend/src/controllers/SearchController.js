import Dev from "../models/Dev";

const parseStringAsArray = require("../utils/parseStringAsArray");


module.exports = {
  async index(req,res){
    //busca todos os deves num raio de 10 km 
    //filtrar por tecnologia
    const {latitude, longitude,techs} = req.query;
    const techsArr = parseStringAsArray(techs);
    const devs = await Dev.find({
      techs:{
        $in:techsArr,
      },
      location:{
        $near: {
          $geometry:{
            type:'Point',
            coordinates:[longitude,latitude],
          },
          $maxDistance: 10000,
        },
      },
    })

    console.log(techsArr);
    return res.json({devs});


  },

}