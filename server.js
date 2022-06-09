import express from "express";
import { ConnectToDatabase } from "./databaseConnection.js";
import { gamesRouter } from "./routes/gamesRouter.js";

const server = express();
ConnectToDatabase();

server.use(express.json());
server.use("/games", gamesRouter);

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
})