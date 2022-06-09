import mongoose from "mongoose";
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    developer: {type: String, required: true},
    publisher: {type: String, required: true},
    tags: [String]
});

const gameModel = mongoose.model("Game", gameSchema);

export {gameModel};