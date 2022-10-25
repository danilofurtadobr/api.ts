import express from "express";
import MysqlConnection from "./infra/database/MysqlConnection";
import BoardRepositoryDb from "./infra/repository/BoardRepositoryDb";
import BoardService from "./service/BoardService";

const app = express();

const connection = new MysqlConnection();
const boardRepository = new BoardRepositoryDb(connection);

app.get("/boards", async function (req, res) {
    const boardService = new BoardService(boardRepository);
    const boards = await boardService.getBoards();
    res.json(boards);
});
app.listen(3000);
