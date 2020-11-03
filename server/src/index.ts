import express, { Application, Response, Request, NextFunction } from 'express';
import cors from 'cors';
import path from 'path';
import morgan from 'morgan';
import routes from './api';
import AppError from './utils/appError';

const App: Application = express();

// Middlewares

const allowedOrigins = ['http://localhost:3000'];

App.use(
  cors({
    origin: (origin, callback) => {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          'The CORS policy for this site does not ' +
          'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

App.use(express.json());

const publicPath = path.join(__dirname, '../');

// Serving static files
App.use(express.static(`${publicPath}/public`));

if (process.env.NODE_ENV === 'development') {
  App.use(morgan('dev'));
}

// Routes

App.use('/api/v1', routes);

App.all('*', (req, res) => {
  res.status(404).json({
    status: 'fail',
    message: `You just hit a route (${req.originalUrl}) that doesn't exist... the sadness.`,
  });
});

// Global Error handler

App.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode || 400).json({
    status: err.status,
    message: err.message,
  });
});

export default App;
