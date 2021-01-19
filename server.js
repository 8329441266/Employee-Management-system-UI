const express = require('express')
const app = express()
const route = require('./routes/routes')
var cors = require('cors')

let port = 4000;
app.use(express.json())
app.use(cors())
app.use('/', route)


app.listen(port, () => {
    console.log(`Server is running.. ${port}`)
    require('./DBManagement/dbEmpManagement')
})