//LIBS
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import DevRouter from './routes/dev.routes';

//ROUTERS
import AuthRouter from './routes/auth.routes'
import CompaniesRouter from './routes/company.routes';
import AdminRouter from './routes/admin.routes';

//.ENV
dotenv.config();

//CREATE APP
const app = express();
const PORT = process.env.PORT || 3000;

//START APP
app.use(cors());
app.use(express.json());

//ROUTES
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use('/company', AuthRouter);
app.use('/company', CompaniesRouter);
app.use('/admin', AdminRouter);

//TEST
app.get('/', (req, res) => {
  res.send('OnVale Backend is running!');
});
app.use('/dev', DevRouter);

//START
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

