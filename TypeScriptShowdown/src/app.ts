import express from 'express'

import bodyParser from 'body-parser';

import totdosRoutes from './routes/todos'

const app = express();

app.use(bodyParser.json())

app.use(totdosRoutes)

app.listen(3000) 