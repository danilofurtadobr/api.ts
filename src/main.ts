import express from "express";
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host     : '127.0.0.1',
    port     : 3306,
    user     : 'root',
    password : '123321',
    database : 'grimes'
});

const app = express();
app.get("/boards", async function (req, res) {
      const boards = await pool.query("select * from grimes.board", []);
      res.json(boards);
})
app.listen(3000);
