import express from 'express';
import cors from 'cors';
import routes from './routes';

//Server PORT
const PORT = process.env.PORT || 3333;

//Server HOST
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';

//App Express
const app = express();

//Cors
app.use(cors());

//JSON
app.use(express.json());

app.use(routes);

//Start the server
app.listen(PORT, () => [console.log(`Servidor rodando na porta ${PORT}...`)]);
