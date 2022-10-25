import Board from "../domain/entity/Board";
import BoardRepository from "../domain/repository/BoardRepository";
import { Service } from "./Service";

export default class BoardService {

    constructor (readonly boardRepository: BoardRepository) {

    }

    async getBoards() {
        const boards = await this.boardRepository.findAll();
        return boards;
    }
}
