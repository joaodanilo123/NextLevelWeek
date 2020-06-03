import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

const port = 3333;

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(port, () => {
    console.clear();
    console.log(`Litening to port ${port}`)
})