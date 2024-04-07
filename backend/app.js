const express=require('express')
const mongoose=require('mongoose')
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const app=express()
const Login=require('./schemas/loginSchema')
//middleware
app.use(express.json());
//app.use(express.urlencoded({encoded:false}));
//routes
//app.use("/api/products",productRoute);





app.listen(3000,()=>{
    console.log('server running');
});

app.post('/api/login',async (req,res)=>{
    try{
        const {username, password} = req.body
        const dbUser=await Login.findOne({username})
        if(!dbUser){
            return res.status(400).json({message:'user not found'});
        }
        const isPasswordMatched= await dbUser.password === password
        if(isPasswordMatched ){
            const token = jwt.sign({ username: username }, "zxcvbnmasdfghjkl");
            return res.json({ message: 'Login successful', token });
        }else{
            return res.status(401).json({ message: 'Invalid credentials' });
        }

    }catch(error){
        res.send(error)
    }
}
);

  


mongoose.connect("mongodb+srv://charan:cherrythebest@incrediblemango.ha5o1tn.mongodb.net/?retryWrites=true&w=majority&appName=IncredibleMango")
.then(()=>{
    console.log('connected to db');
})
.catch(()=>{
    console.log('connection failed');
})


//update a product

