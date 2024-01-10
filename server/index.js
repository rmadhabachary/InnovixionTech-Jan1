const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const userModel=require('./models/users')

const app=express()
const PORT=3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//connect your database here
// mongoose.connect("url")

app.get('/',(req, res)=>{
    userModel.find({})
    .then(user=>res.json(user))
    .catch(err=>console.log(err))
})


app.get('/user/:id',(req, res)=>{
    const id=req.params.id
    userModel.findById({_id:id})
    .then(user=>res.json(user))
    .catch(err=>console.log(err))
})

app.post("/create",(req, res)=>{
    userModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))

})

app.put('/update/:id',(req, res)=>{
    const id=req.params.id
    userModel.findByIdAndUpdate({_id:id},
        {name:req.body.name,
        email:req.body.email,
        adress:req.body.adress})
    .then(user=>res.json(user))
    .catch(err=>console.log(err))
})

app.delete("/delete/:id",(req, res)=>{
    const id=req.params.id
    userModel.findByIdAndDelete({_id:id})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
    
})





app.listen(PORT, ()=>{
    console.log(`Listening at port ${PORT}`)
})