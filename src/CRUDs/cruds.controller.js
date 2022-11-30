const usersDB = []
let id = 1

// {
//     id: 1,
//     first_name: 'Nicolás',
//     last_name: 'Montenegro',
//     email: 'nico@gmail.com',
//     password: 'abcd1234',
//     birthday: '30/09/1999'
// }

const findAllUsers = () => {
    return usersDB
}

const findUserById = (id) => {
    const data = usersDB.find(item => item.id == id)
    return data
}

const createNewUser = (obj) => {
    const newUser = {
        id: id++,
        first_name: obj.first_name,
        last_name: obj.last_name,
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday
    }
    usersDB.push(newUser)
    return newUser
}

module.exports = {
    findAllUsers,
    findUserById,
    createNewUser
}