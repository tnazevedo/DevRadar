
import axios from "axios";
import Dev from "../models/Dev";
const parseStringAsArray = require('../utils/parseStringAsArray');
const {findConnections, sendMessage } = require('../websocket');

module.exports = {
  async index(req,res){
    const devs= await Dev.find();
    return res.json(devs);

  },

  async store(req,res){
  const {github_username} = req.body;
  
  
  let  dev = await Dev.findOne({github_username});
  if(!dev){
    const response = await axios.get(
      `https://api.github.com/users/${github_username}`
    );
    const {
      name = login,
      avatar_url,
      bio,
      latitude,
      longitude
    } = response.data;
    const techsArray = parseStringAsArray(techs);
    const location = {
      type: "Point",
      coordinates: [longitude, latitude]
    };
    dev = await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: techsArray,
      location
    });

    // Filtrar as Conexões que estão a no maximo 10km
    // e que o novo dev tenha pelo menos uma das techs filtradass   
    
    const sendSocketMessageTo = findConnections(
      {latitude, longitude},
      techsArray,

    )
    console.log(sendSocketMessageTo); 
    sendMessage(sendSocketMessageTo, 'new-dev', dev);


  }
  return response.json(dev);
  
  }
}