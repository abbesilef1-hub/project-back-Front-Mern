const mongoose=require("mongoose");

const db_connect=async()=>{
try {
    const result=await mongoose.connect(process.env.DB_URI);
    console.log("database is connected")
} catch (error) {
    console.log(err);
    console.log("database is not connected");
}

}

module.exports=db_connect

