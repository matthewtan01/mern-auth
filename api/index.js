import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(()=>{
    console.log("connected to mongodb");
  })
  .catch((err)=>{
    console.log(err);
  })

const app = express();

app.use(express.json()); // allow json as input for the backend

app.listen(3000, () => {
  console.log("server listening on port 3000!");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);