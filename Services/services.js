let model = require('../model/model')

class services {

    empCreateServices = (req) => {
        console.log("in services");
        return model.create(req).then((result) => {
                return ({ message: "Add successfully", data: result,  flag:true })
         }).catch((error) => {
                return ({ message: "Failed to add data", data: error, flag:false })
        })
        
    }

    empGetServices = () => {
        console.log("in services");
        return model.read().then((result) => {
            return ({ message: "Data get successfully", data: result, flag:true })
        }).catch((error) => {
            return ({ message: "Failed to get data", data: error,  flag:false })
        })
    }

    empGetByIdServices = (req) => {
        try {
            console.log("in services");
            let pass = {
                "_id":req.params.id
            }
            return model.read(pass).then((result) => {
                return ({ message: "records Found by id !", data: result, flag:true })
            }).catch((error) => {
                return ({ message: "No found by id!",data: error,  flag:false })
            })
        } catch (error) {
        }
    }

    empUpdateServices = (req) => {
        console.log("in services");
        let id=req.params.id;
        let empData={
               id,data:req.body
        }
        return model.update(empData).then((result) => {
            return ({ message: "Data updated successfully", data: result, flag:true })
        }).catch((error) => {
            return ({ message: "Failed to update data", data: error, flag:false })
        })

    }

    empDeleteServices = (req) => {
        console.log("in services");
        return model.delete(req).then((result) => {
            return ({ message: "Data deleted successfully", data: result, flag:true })
        }).catch((error) => {
            return ({ message: "Failed to delete data", data: error, flag:false  })
        })

    }

}

module.exports = new services()