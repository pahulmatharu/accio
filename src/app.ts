import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import routes from './controllers';
import config from './config';

const app = express();
app.use(cookieParser());
app.use(compression());
app.use(
  cors({
    origin: config.CLIENT_URL,
    credentials: true, // if we implemented auth, then we would have a jwt token as an http only cookie.
    methods: 'GET,PUT,POST,OPTIONS,DELETE',
  })
);
app.use(helmet());
app.use(express.json());

app.use(config.API_BASE, routes);
export default app;