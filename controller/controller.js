import Data from "../models/dataSchema";

class CrudOperation {

    static getApiData = async (req, res) =>{
        try {
            const data = await Data.find();
            console.log(data);
            res.json(data);
        } catch (err) {
            console.log(err)
        }
    }

    static postApiData = async (req, res) =>{
        try {
            const data = await Data.create(req.body);
            console.log(data);
            res.json(data);
        } catch (err) {
            console.log(err)
        }
    }

    static putApiData = async (req, res) =>{
        try {
            const data = await Data.findByIdAndUpdate(req.params.id, req.body);
            console.log(data);
            res.json(data);
        } catch (err) {
            console.log(err)
        }
    }

    static deleteApiData = async (req, res) =>{
        try {
            const data = await Data.findByIdAndDelete(req.params.id);
            console.log(data);
            res.json(data);
        } catch (err) {
            console.log(err)
        }
    }
}

export default CrudOperation;
