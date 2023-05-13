import User from "./user.model";

// 4. Connect to MongoDB
export const createUserToDBc = async () => {
    const user =await new User({
        id: "444444",
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
    // console.log(user);
    return user;
};