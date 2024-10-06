const  mongoose=require("mongoose")


 const connnection=mongoose.connect("mongodb://localhost:27017/Todolist")
.then((result) => {
    console.log('connected to Mongodb succeful');
}).catch((err) => {
    console.error(err);
});




module.exports= connnection;