const exp=require('constants');
const express=require('express');
const path=require('path');
const port=8000;
//Including mongoose.js file
const db=require('./config/mongoose');

//collection should be populated using this Todo variable
const Todo=require('./models/todo');

const app=express();

//setting ejs value for view engine property
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//use signify the middleware
app.use(express.urlencoded());

//put middleware here
app.use(express.static('assets'));

var todoList=[
    {
        description:"Why not add a task ?",
        category:"",
        date: 01-02-2022
    },
    {
        description:"Let's make a TODO App",
        category:"SCHOOL",
        date:01-03-2022
    },
    {
        description:"Annual report submission deadline",
        category:"WORK",
        date:02-04-2022
    }

]


//sending back smth as response
app.get('/',function(req, res){
       //render the home file
//fetch the todo list from database
Todo.find({}, function(err, todolists){
    if(err){
        console.log('Error in fetching todo list from db');
        return;
    }

    return res.render('home',{
        title:"TODO APP",
        todo_list:todolists

    });
});
});

//router and controller
app.post('/create-todolist', function(req,res){
    
    //when we receive key-value, it is into req.body
    // todoList.push(req.body);
    // return res.redirect('/');
    // return res.redirect('back');


    
    Todo.create({
        //name of key should be same as schema
       description: req.body.description,
       category: req.body.category,
       date: req.body.date
    },function(err,newTodo){
        if(err){console.log('error in creating a todo list!', err);
       return;}

       console.log('*******',newTodo);
       return res.redirect('back');
    });
});


//setting router and controller for deleting list
app.get('/delete-todolist', function(req,res){
   //get the query from the url
   //deleting wthout connecting database
    // let category=req.query.category;
    // let todoIndex=todoList.findIndex(todolist => todolist.category==category);

    // if(todoIndex!=-1){
    //     todoList.splice(todoIndex,1);
    // }
    // //now, need to go on same page
    // return res.redirect('back');




    //deleting after connecting the database
    let id=req.query.id;
   
    Todo.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error in deleting an object from database');
            return;
        }
        //now, need to go on same page
    return res.redirect('back');
    });

});






//run our server
app.listen(port,function(err){
    if(err){console.log('Error in running the server',err);}
    console.log('Yup! my Express Server is running on port',port);
});