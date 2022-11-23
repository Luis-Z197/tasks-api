const Tasks = require("../Models/tasks");

const model = new Tasks();

const getTasks = async (req, res) => {
    let response = await model.getAll()
    res.json(response)
}

const getTask = async (req, res) => {
    let idTask = req.params.id
    let response = await model.getById(idTask)
    res.json(response)
}

const saveTask = async (req, res) => {
    let field = req.body
    let result = await model.createTask(field.name, field.description, field.scheduled_date, field.status)
    if (result.affectedRows === 1) {
        res.json({
            status: 200,
            message: 'Successfully saved'
        })
    } else {
        res.json({
            status: 400,
            message: 'Error when saving, check data and try again'
        })
    }
}

const updateTask = async (req, res) => {
    let field = req.body
    let idTask = req.params.id
    let result = await model.updateTask(field.name, field.description, field.scheduled_date, idTask)
    if (result.affectedRows === 1) {
        res.json({
            status: 200,
            message: 'Successfully updated'
        })
    } else {
        res.json({
            status: 400,
            message: 'Error when updating, check data and try again'
        })
    }
}

const deleteTask = async (req, res) => {
    let idTask = req.params.id
    let result = await model.deleteTask(idTask)
    if (result.affectedRows === 1) {
        res.json({
            status: 200,
            message: 'Successfully deleted'
        })
    } else {
        res.json({
            status: 400,
            message: 'Error when deleting, try again'
        })
    }
}

module.exports = { getTasks, getTask, saveTask, updateTask, deleteTask };