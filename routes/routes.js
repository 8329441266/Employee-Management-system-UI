  
let route = require('express').Router()
let empController = require('../Controller/empController')

route.post('/employee/create',empController.empCreateController);
route.get('/employee/read',empController.empGetController);
route.post('/employee/readById/:id',empController.empGetByIdController);
route.put('/employee/update/:id',empController.empUpdateController);
route.delete('/employee/delete/:id',empController.empDeleteController);




module.exports = route;