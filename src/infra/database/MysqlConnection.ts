import Connection from './Connection';
import mysql from 'mysql2/promise';

export default class MysqlConnection implements Connection {
    connection: any;

    constructor() {
        this.connection = mysql.createPool({
            host     : '127.0.0.1',
            port     : 3306,
            user     : 'root',
            password : '123321',
            database : 'grimes',
        });
    }

    query(statement: string, params: any): Promise<any> {
        return this.connection.query(statement, params);
    }

    close(): Promise<void> {
        return this.connection.$pool.end();
    }
}
