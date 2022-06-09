import mongoose from "mongoose";

mongoose.connection.on("connected", () => {
    console.log("Database connection succesful!");
})

function ConnectToDatabase() {
    mongoose.connect('mongodb://localhost:27017/GamesDB');
}

export {ConnectToDatabase}