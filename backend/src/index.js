import express from'express';
import mongoose from 'mongoose';
import routes  from './routes';
import cors from 'cors';
const http = require('http');
import { setupWebsocket} from './websocket';
const app = express();
const server = http.Server(app);
setupWebsocket(server);


server.listen(3333);
mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-stfij.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
app.use(cors());
app.use(express.json());
app.use(routes);



