const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required']
    },

    lastName: {
        type: String,
        required: [true, 'Last name is required']
    },

    emailId: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },

    mobileNumber: {
        type: Number,
        required: [true, 'Mobile number is required'],  
    },

    companyName: {
        type: String,
        required: [true, 'Company Name is required']
    },

    salary: {
        type: Number,
        required: false
    }

}, { timestamps: true });

let model = mongoose.model('sample', schema)

class empModel {

    create = (req) => {
        try{
            console.log("in model");
            return new Promise((resolve, reject) => {
                model.create(req).then((result) => {
                    resolve(result)
                }).catch((error) => {
                    reject(error)
                })
            })
        }catch (error) {
            console.log(error);
        }
    }

    read = () => {
        try{
            console.log("in model");
            return new Promise((resolve, reject) => {
                model.find().then((result) => {
                    resolve(result)
                }).catch((error) => {
                    reject(error)
                })
            })
        }catch (error) {
            console.log(error);
        }
    }

    readById = (req) => {
        try{
            console.log("in model");
            return new Promise((resolve, reject) => {
                model.find(req).then((result) => {
                    resolve(result)
                }).catch((error) => {
                    reject(error)
                })
            })
        }catch (error) {
            console.log(error);
        }
    }

    update = (req) => {
        try{
            console.log("in model");
            return new Promise((resolve, reject) => {
                model.findByIdAndUpdate(req.id,req.data).then((result) => {
                    resolve(result)
                }).catch((error) => {
                    reject(error)
                })
            })
        }catch (error) {
            console.log(error);
        }
    }

    delete = (req) => {
        try {
            return new Promise((resolve, reject) => {
                model.findByIdAndDelete(req.params.id).then((result) => {
                    resolve(result)
                }).catch((error) => {
                    reject(error)
                })
            })
        } catch (error) {
            console.log(error);
        }
    }

   
}

module.exports = new empModel()