
const express = require('express');
const mongoose = require('mongoose');
const cors=require("cors");
const bodyParse=require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParse.json());
async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/registrationForm');mongodb:
        console.log("Database connected");
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
}

main().catch((err) => console.log(err));

const UserSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Password: String
});

const User = mongoose.model("User", UserSchema);

app.use(express.json());

// Server-side code
app.post('/api/register', async (req, res) => {
    try {
        let user = new User();
        user.Name = req.body.name;
        user.Email = req.body.email;
        user.Password = req.body.password;
        await user.save();
        res.json("success");
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});



    
app.listen(8082, () => {
    console.log("Server running");
});

app.use(express.json());
