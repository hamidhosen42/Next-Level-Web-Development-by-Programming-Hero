import { NextFunction,Request,Response } from "express";
import { createUserToDB } from "./user.service";

export const createUser = async(req: Request, res: Response, next: NextFunction) => {
    // inserting a test data into mongodb
    /*
    Step - 1 : Interface
    Step - 2 : Schema
    Step - 3 : Model
    Step - 4 : Database Quary
    */

    const user =await createUserToDB();

    res.status(200).json({
        status:"success",
        data:user
    });
}

// Pattern

// Route -> controller -> service