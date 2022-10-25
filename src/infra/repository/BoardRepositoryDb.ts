import Board from "../../domain/entity/Board";
import BoardRepository from "../../domain/repository/BoardRepository";
import Connection from "../database/Connection";

export default class BoardRepositoryDb implements BoardRepository {
    constructor (readonly connection: Connection) {

    }

    async findAll(): Promise<Board[]> {
        const [rows, fields] = await this.connection.query("select * from grimes.board", []);
        const boards: Board[] = [];
        for (const board of rows) {
            boards.push(new Board(board.name))
        }
        return boards;
    }
}
