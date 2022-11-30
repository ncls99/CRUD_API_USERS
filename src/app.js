const express = require("express")

const userRouter = require('./CRUDs/cruds.router')

const port = 8000
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'Todo OK'})
})

app.use('/api/v1', userRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})