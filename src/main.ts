import BoardController from "./infra/controller/BoardController";
import MysqlConnection from "./infra/database/MysqlConnection";
import ExpressAdapter from "./infra/http/ExpressAdapter";

const connection = new MysqlConnection();
const http = new ExpressAdapter();
new BoardController(http, connection);
http.listen(3000);
