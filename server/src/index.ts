import express, { Application, Response, Request, NextFunction } from 'express';
import path from 'path';
import morgan from 'morgan';
import routes from './api';
import AppError from './utils/appError';

const App: Application = express();

// Middlewares

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
