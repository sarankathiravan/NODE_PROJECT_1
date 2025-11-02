const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
    name: String,
    stack: [String]
});

const experienceSchema = new mongoose.Schema({
    company: String,
    role: String,
    duration: String,
    projects: [projectSchema]
});

const skillSchema = new mongoose.Schema({
    name: String,
    level: String
});


const userSchema = new mongoose.Schema({
    name: { type: String,  },
    email: { type: String, required: true },
    // email: { type: String, required: true, unique: true },

    age: { type: Number, required: true, min: 18, max: 100 },
    userId: Number,
    hobbies: { type: [String], required: true },
    isAdmin: { type: Boolean, default: false },
    skills: [skillSchema],
    experience: [experienceSchema],


    address: { street: { type: String, required: true }, city: { type: String, required: true }, state: { type: String, required: true }, zip: { type: String, required: true } },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model("User", userSchema);