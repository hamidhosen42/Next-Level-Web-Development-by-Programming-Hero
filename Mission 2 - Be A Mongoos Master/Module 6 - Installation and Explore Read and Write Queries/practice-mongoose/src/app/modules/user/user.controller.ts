import { createUserToDB, getUsersFromDB } from './user.service';
import { NextFunction, Request, Response } from "express";


// inserting a test data into mongodb
/*
Step - 1 : Interface
Step - 2 : Schema
Step - 3 : Model
Step - 4 : Database Quary
*/
export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const user = await createUserToDB(data);

    res.status(200).json({
        status: "success",
        data: user
    });
}

// ! get user information
export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    const user = await getUsersFromDB();

    res.status(200).json({
        status: "success",
        data: user
    });
};


// Pattern

// Route -> controller -> service
