import { Router } from "express";
import { gameModel } from "../models/gameModel.js";


const gamesRouter = Router();

gamesRouter.get("/", async (req, res) => {
    const result = await gameModel.find({});

    res.json(result);
});

gamesRouter.post("/", async (req, res) => {
    const game = new gameModel(
        {
            title: req.body.title,
            description: req.body.description,
            developer: req.body.developer,
            publisher: req.body.publisher,
            tags: req.body.tags
        }
    )

    game.save();
    res.json(game);
});

gamesRouter.put("/", async (req, res) => {
    const game = await gameModel.findOneAndUpdate({_id: req.body._id}, req.body, {returnOriginal: false});

    res.json(game);
})

gamesRouter.delete("/", async (req, res) => {
    const game = await gameModel.findOneAndRemove({_id: req.body._id}, {returnOriginal: true});

    res.json(game);
})

export {gamesRouter};