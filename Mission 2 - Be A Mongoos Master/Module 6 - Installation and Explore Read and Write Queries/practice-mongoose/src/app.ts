import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { Schema, model } from 'mongoose';

const app: Application = express()

// using cors
app.use(cors())

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello World!');
    // next();

    // inserting a test data into mongodb
    /*
    Step - 1 : Interface
    Step - 2 : Schema
    Step - 3 : Model
    Step - 4 : Database Quary
    */

    // 4. Connect to MongoDB
    const createUserToDB = async () => {
        const user = new User({
            id: "19100",
            role: "student",
            password: "2323424",
            name: {
                firstName: "Md.Hamid Hosen",
                middleName: "Hosen",
                lastName: "Azad",
            },
            gender: "male",
            email: "haskdkf@gmail.com",
            contactNo: "34353",
            emergencyContactNo: "23224",
            presentAddress: "Chittagong",
            permanentAddress: "Satkania"
        });
        await user.save();
        console.log(user);
    };

    createUserToDB();
});

export default app;

// Parrern MVC, Modular

/*
Interface interface.ts
Schema , Model -> model.ts

route
route function -> controller.ts
Database Query Function --> service
*/