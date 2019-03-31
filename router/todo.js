const route=require('express').Router()
 let todos=[{task:"this is first task"},
{task:"this is first task"}]

route.get('/',(req,res)=>{
    res.render('todo.hbs',{todos})
})
route.post('/',function(req,res){
    todos.push({task:req.body.newtodo})
    res.redirect('todos')
})
module.exports=route