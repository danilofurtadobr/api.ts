import Board from "../entity/Board";
import { Service } from "./Service";

export default class BoardService extends Service {
    async getBoards() {
        const [rows, fields] = await this.db.query("select * from grimes.board", []);
        const boards: Board[] = [];
        for (const board of rows) {
            boards.push(new Board(board.name))
        }
        return boards; 
    }
}
