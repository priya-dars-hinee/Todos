const  router=require("express").Router();

const Todo=require("../model/Todo");

router.post("/add/todo",(req,res)=>{
    const {todo}=req.body;

    const newTodo=new Todo({todo});

    newTodo
    .save()
    .then(() =>{
        console.log("Successfully added todos");
        res.redirect("/")
        
    })
    .catch((error)=>{
        console.log(error)
    })
    
})
 

.get("/delete/todo/:_id",(req,res)=>{
    const {_id}=req.params;

    Todo.deleteOne({_id})
    .then(() =>{
        console.log("Deleted Todos")
        res.redirect("/")
    })
    .catch ((error)=>{
        console.log(error)
    })
})
module.exports=router;