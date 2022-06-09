import express from "express";
import mongoose from "mongoose";

const server = express();

server.get('/', (req, res) => {
    res.end("Hello, World!");
})

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
})