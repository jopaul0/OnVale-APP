//LIBS
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import prisma from './prisma';
import bcrypt from 'bcrypt';

//.ENV
dotenv.config();

//CREATE APP
const app = express();
const PORT = process.env.PORT || 3000;

//START APP
app.use(cors());
app.use(express.json());

//TEST
app.get('/', (req, res) => {
  res.send('OnVale Backend is running!');
});

//START
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

