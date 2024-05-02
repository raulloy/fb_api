import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { getAccountInsights } from './functions.js';

dotenv.config();

const app = express();
const port = 5000 || process.env.port;
const accessToken = process.env.FB_API_TOKEN;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/account-insights', async (req, res) => {
  const { since, until } = req.query;
  const accountInsights = await getAccountInsights(accessToken, since, until);

  res.send(accountInsights);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
