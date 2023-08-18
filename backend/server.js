import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';
import connectDB from './config/connectDB.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import invoiceRouter from './router/invoiceRouter.js';
import userRouter from './router/userRouter.js';
import path from 'path';


const app = express();
app.use(cors());

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

const __dirname = path.resolve();

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '/frontend/build')));
//   app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')));
// } else {
//   app.get('/', (req, res) => {
//     res.send('hello from the server');
//   });
// }


// Error Handling
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${ port }`));


// process.on('unhandledRejection', (err) => {
//   console.log(err.name, err.message);
//   console.log('Unhandled Rejection');

//   server.close(() => {
//     process.exit(1);
//   });

// });
