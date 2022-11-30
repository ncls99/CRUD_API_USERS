const usersController = require('./cruds.controller')

const getAllUsers = (req, res) => {
    const data = usersController.findAllUsers()
    res.status(200).json(data)
}

const getUserById = (req, res) => {
    const id = req.params.id
    const data = usersController.findUserById(id)

    if (data) {
        res.status(200).json(data)
    } else {
        res.status(404).json({ messge: 'Invalid ID' })
    }
}

const postNewUser = (req, res) => {
    const { first_name, last_name, email, password, birthday } = req.body

    if (first_name && last_name && email && password && birthday) {
        const data = usersController.createNewUser({
            first_name,
            last_name,
            email,
            password,
            birthday
        })
        res.status(200).json(data)
    } else {
        res.status(400).json({
            message: 'Invalid data'
        })
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    postNewUser
}