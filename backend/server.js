import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';
import connectDB from './config/connectDB.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import invoiceRouter from './router/invoiceRouter.js';
import userRouter from './router/userRouter.js';

const app = express();
// app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

connectDB();//Connect to database

const port = process.env.PORT;


// process.on('uncaughtException', (err) => {
//   console.log(err.name, err.message);
//   console.log('Unhandled Exception');
//   process.exit(1);
// });

//Routes 
app.use('/api/invoice', invoiceRouter);
app.use('/api/users', userRouter);
// Error Handling
app.use(notFound);
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('hello from the server');
});

app.listen(port, () => console.log(`Server running on port ${ port }`));


// process.on('unhandledRejection', (err) => {
//   console.log(err.name, err.message);
//   console.log('Unhandled Rejection');

//   server.close(() => {
//     process.exit(1);
//   });

// });