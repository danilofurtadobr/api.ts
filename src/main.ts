import express from "express";
import BoardService from "./service/BoardService";

const app = express();
app.get("/boards", async function (req, res) {
    const boardService = new BoardService();
    const boards = await boardService.getBoards();
    res.json(boards);
});
app.listen(3000);
