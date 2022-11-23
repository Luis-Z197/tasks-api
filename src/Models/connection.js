const mysql = require('mysql2');

class FastORM {

    constructor() {
        this.host = 'localhost'
        this.user = 'root'
        this.password = ''
        this.database = 'api-nodejs'

        this.db = mysql.createPool({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database
        });
    }

    async create(table, props = '', statements, values) {
        const pool = this.db.promise();
        const [rows] = await pool.execute(
            `INSERT INTO ${table}${props} VALUES(${statements})`,
            values
        );

        return rows
    }

    async read(table, props = '*', statements = '', values = []) {

        const pool = this.db.promise();
        const [rows] = await pool.execute(
            `SELECT ${props} FROM ${table} ${statements}`,
            values
        );
        return rows
    }

    async update(table, statements = '', idName, values = []) {

        const pool = this.db.promise();
        const [rows] = await pool.execute(
            `UPDATE ${table} SET  ${statements} WHERE ${idName}=?`,
            values
        );
        return rows
    }

    async delete(table, idName, id) {

        const pool = this.db.promise();
        const [rows] = await pool.execute(
            `DELETE FROM ${table} WHERE ${idName}=?`,
            [id]
        );
        return rows
    }

}

module.exports = FastORM;