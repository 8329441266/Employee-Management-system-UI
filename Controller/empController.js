let response = {}
let  empService = require('../Services/services')

class empController{

    empCreateController = (req, res) => {
        try {
            console.log("in controller");
            empService.empCreateServices(req.body).then((result) => {
                response.success = true;
                response.message = result.message;
                response.data = result.data;
                return res.status(200).send(response);
            }).catch((err) => {
                response.success = false;
                response.message = error.message;
                response.error = error.error;
                return res.status(400).send(response);
            })
        } catch (error) {
           console.log(error);
        }
    }

    empGetController = (req, res) => {
        try {
            console.log("in controller");
            empService.empGetServices().then((result) => {
                response.success = result.flag;
                response.message = result.message;
                response.data = result.data;
                return res.status(200).send(response);
            }).catch((err) => {
                response.success = false;
                response.message = error.message;
                response.error = error.error;
                return res.status(400).send(response);
            })
        } catch (error) {
            console.log(error);
        }
    }

    empGetByIdController = (req, res) => {
        try {
            empService.empGetByIdServices(req).then((result) => {
                response.success = result.flag;
                response.message = result.message;
                response.data = result.data;
                return res.status(200).send(response);
            }).catch((err) => {
                response.success = false;
                response.message = error.message;
                response.error = error.error;
                return res.status(400).send(response);
            })
        } catch (error) {
            console.log(error);

        }
    }


    empUpdateController = (req, res) => {
        try {     
            console.log("in controller");
            empService.empUpdateServices(req).then((result) => {
                response.success = true;
                response.message = result.message;
                response.data = result.data;
                return res.status(200).send(response);
            }).catch((err) => {
                response.success = false;
                response.message = err.message;
                response.data = error.error;
                return res.status(400).send(response);
            })
        } catch (error) {
            console.log(error);
        }
    }

    empDeleteController = (req, res) => {
        try {
            empService.empDeleteServices(req).then((result) => {
                console.log(result);
                response.success = result.flag;
                response.message = result.message;
                response.data = result.data;
                return res.status(200).send(response);
            }).catch((error) => {
                response.success = false;
                response.message = error.message;
                response.data = error.error;
                return res.status(400).send(response);
            })
        } catch (error) {
            console.log(error);
          
        }
    }
    

}

module.exports = new empController();