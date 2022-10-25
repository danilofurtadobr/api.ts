import Connection from "../database/Connection";
import BoardService from "../../service/BoardService";
import Http from "../http/Http";
import BoardRepositoryDb from "../repository/BoardRepositoryDb";

export default class BoardController {

    constructor (readonly http: Http, readonly connection: Connection) {
        http.route("get", "/boards", async function (params: any, body: any) {
            const boardRepository = new BoardRepositoryDb(connection);
            const boardService = new BoardService(boardRepository);
            const boards = await boardService.getBoards();
            return boards;
        });
    }
}
