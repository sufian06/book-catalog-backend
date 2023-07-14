import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import routes from './app/routes';

const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);

// testin
app.get('/', (req: Request, res: Response) => {
  res.send('Book Catalog Working Successfully!');
});

export default app;
