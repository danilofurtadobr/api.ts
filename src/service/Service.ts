import mysql from 'mysql2/promise';

export abstract class Service {
    protected db: any;
    constructor() {
        this.db = mysql.createPool({
            host     : '127.0.0.1',
            port     : 3306,
            user     : 'root',
            password : '123321',
            database : 'grimes',
        });
    }
}
