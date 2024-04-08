import mongoose from "mongoose"


const DbConnect = async () => {
    try{
        const db = await mongoose.connect("mongodb://localhost:27017/ecoach")
    }
    catch(e){
        throw new Error("db failed ")
    }
}

export default DbConnect;