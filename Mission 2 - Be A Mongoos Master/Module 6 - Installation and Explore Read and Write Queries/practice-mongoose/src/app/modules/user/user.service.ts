import { User } from './user.model';
import { IUser} from "./user.interface";

// 4. Connect to MongoDB

// insert data into mongodb
export const createUserToDB = async (payload: IUser): Promise<IUser> => {
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

    const user = await new User(payload);

    await user.save();
    // console.log(user);
    return user;
};

export const getUsersFromDB = async ():Promise<IUser[]> => {
    const users = User.find();
    return users;
};