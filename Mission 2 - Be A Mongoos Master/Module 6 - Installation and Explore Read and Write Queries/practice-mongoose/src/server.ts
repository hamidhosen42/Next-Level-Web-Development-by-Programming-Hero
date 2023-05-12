const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 5000

// DataBase Connection
async function pracice() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log(`Database connection successful`);
    } catch (err) {
        console.log(`Failed to connect database`, err);
    }
}
pracice()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server s listening on port ${port}`)
})