import mongoose from 'mongoose';
import { config } from 'dotenv';

config({ path: './config.env' });

import App from './index';

const DB = process.env.DATABASE_LOCAL as string;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB CONNECTIONS SUCCESSFULLY'));

const PORT = process.env.PORT || 5001;

App.listen(PORT, () => console.log(`Server starting at port:${PORT}`));
