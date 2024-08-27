const mongoose=require("mongoose")
//.connect(mongodbserver connection string/ databasename)

mongoose.connect("mongodb://localhost:27017/log")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})


const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
// det- collection name in database
const logcollection=new mongoose.model('det',logInSchema)
module.exports=logcollection
