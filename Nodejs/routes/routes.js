const router=require("express").Router();
const Todo=require("../model/Todo")



router.get('/',async(req,res)=>{

    const  allTodo=await Todo.find();

    res.render("index1",{todo:allTodo})
})


module.exports=router;