const mongoose=require("mongoose");
const schema=mongoose.Schema;

const userSchema = new schema({
    name:String,
    lastname:String,
    age:Number,
    dateofbirth:Date,
    img:String,
    email:{type:String, unique:true},
    gender:{type:String, default:"Female"},
    isAdmin:Boolean,
    score:Array
});

const User = mongoose.model('User', userSchema);

module.exports=User