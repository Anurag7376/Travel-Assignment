import mongoose from 'mongoose'


const connectDB=async ()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/TravelManager")
        console.log("Database connected")
        
    }catch(err){
        console.log(err)
    }
}

export default connectDB