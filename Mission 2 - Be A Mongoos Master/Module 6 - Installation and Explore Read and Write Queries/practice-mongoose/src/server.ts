import mongoose from 'mongoose';
import app from './app';

const port:number = 5000

// DataBase Connection
async function pracice() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log(`Database connection successful`);

        app.listen(port, () => {
            console.log(`Server s listening on port ${port}`)
        })
    } catch (err) {
        console.log(`Failed to connect database`, err);
    }
};
pracice()