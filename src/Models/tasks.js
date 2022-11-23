const FastORM = require("./Connection");

class Tasks extends FastORM {

    constructor() {
        super()
        this.table = 'tasks'
    }
    async getAll() {
        let response = await this.read(this.table)
        return response;
    }
    async getById(id) {
        let values = [id]
        let response = await this.read(this.table, '', 'WHERE id=?', values)
        return response;
    }
    async createTask(name, description, scheduled_date, status) {
        let values = [name, description, scheduled_date, status]
        let response = await this.create(this.table, '(name, description, scheduled_date, status)', '?, ?, ?, ?', values)
        return response;
    }
    async updateTask(name, description, scheduled_date, id_task) {
        let values = [name, description, scheduled_date, id_task]
        let response = await this.update(this.table, 'name=?, description=?, scheduled_date=?', 'id_task', values)
        return response;
    }
    async deleteTask(id_task) {
        let response = await this.delete(this.table, 'id_task', id_task)
        return response;
    }

}
module.exports = Tasks;