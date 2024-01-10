const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    adress:String
})

// const userModel=mongoose.model("collectionname",userSchema)

module.exports=userModel

