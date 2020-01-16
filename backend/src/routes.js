import {Router} from 'express';
const DevController = require('./controllers/DevController');
const SearchController = require("./controllers/SearchController");

const routes = Router();

routes.post('/devs',DevController.store);
routes.get('/devs',DevController.index);
routes.get("/search", SearchController.index);

export default  routes;