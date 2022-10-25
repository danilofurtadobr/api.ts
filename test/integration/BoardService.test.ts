import MysqlConnection from "../../src/infra/database/MysqlConnection";
import BoardRepositoryDb from "../../src/infra/repository/BoardRepositoryDb";
import BoardService from "../../src/service/BoardService";

test("Deve listar os quadros", async function () {
    const connection = new MysqlConnection();
    const boardRepository = new BoardRepositoryDb(connection);
    const boardService = new BoardService(boardRepository);
    const boards = await boardService.getBoards();
    expect(boards).toHaveLength(1);
    const [board] = boards;
    expect(board.name).toBe("Projeto 1");
});
