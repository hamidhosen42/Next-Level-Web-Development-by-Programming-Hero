import { User } from './user.model';
import { IUser } from "./user.interface";

// 4. Connect to MongoDB

//! insert data into mongodb
export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    // creating a new user
    const user = await new User(payload); // User -> class user->instance

    await user.save(); //build in instance method custom instance method
    const fullName: string = user.fullName(); // custom instance method
    console.log(fullName);
    return user;
};

//! get all user
export const getUsersFromDB = async (): Promise<IUser[]> => {
    const users = User.find();
    return users;
};

//! get user by id
export const getUserByIdFromDB = async (payload: string): Promise<IUser | null> => {
    const user = await User.findOne({ id: payload }, { name: 1 });
    return user;
};

//! get Admin users  
export const getAdminUserFromDB = async () => {
    const admins = await User.getAdminUsers();
    console.log(admins);
    return admins;
};

//! Class -> Attach -> Method -> Directly call using Class
//! user = new User
//! user.   instance methods
//! User.getAdminUsers()

    // const user =await new User({
    //     id: "444444",
    //     role: "student",
    //     password: "2323424",
    //     name: {
    //         firstName: "Md.Hamid Hosen",
    //         middleName: "Hosen",
    //         lastName: "Azad",
    //     },
    //     gender: "male",
    //     email: "haskdkf@gmail.com",
    //     contactNo: "34353",
    //     emergencyContactNo: "23224",
    //     presentAddress: "Chittagong",
    //     permanentAddress: "Satkania"
    // });