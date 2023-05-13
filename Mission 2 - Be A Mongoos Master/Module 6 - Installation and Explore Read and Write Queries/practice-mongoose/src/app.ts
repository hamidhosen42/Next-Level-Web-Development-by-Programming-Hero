import express, { Application } from 'express';
import cors from 'cors';
import { Schema, model } from 'mongoose';
import userRoute from './app/modules/user/user.route';
const app: Application = express()

// using cors
app.use(cors())

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/api/v1/user',userRoute);
app.use("/api/v1/user",userRoute);

export default app;




// Parrern MVC, Modular

/*
Interface interface.ts
Schema , Model -> model.ts

route
route function -> controller.ts
Database Query Function --> service
*/