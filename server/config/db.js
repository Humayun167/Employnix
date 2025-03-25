import mongoose from "mongoose";

// function to connect ot the database
const connectDB = async()=>{
    mongoose.connection.on('connected',()=>console.log("database connected"))


    await mongoose.connect(`${process.env.MONGODB_URI}/employnix`)
     
}

export default connectDB; 