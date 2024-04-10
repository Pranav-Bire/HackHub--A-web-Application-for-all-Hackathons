const port=4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path= require('path');
const cors = require('cors');
const { type } = require('os');
const { log } = require('console');


app.use(express.json());
app.use(cors());


// Database Connection with mongodb

mongoose.connect("mongodb+srv://pranavbire495:Kbiu9Gu2PzPYPcWv@cluster0.dlzwhpw.mongodb.net/HackHub")

//Api creation

app.get("/",(req,res)=>{
    res.send("express app is running")
})

// image storage engine
const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.filename}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

//creating upload endpoint for images
app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('event'),(req,res)=>{
res.json({
    success:1,
    image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

// schhema for creating product
const Event = mongoose.model("Event",{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:String,
        required:true,
    },
    old_price:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },

})


app.post('/addevent',async(req,res)=>{
    let events =await Event.find({});
    let id;
    if(events.length>0){
        let last_event_array = events.slice(-1);
        let last_event = last_event_array[0];
        id=last_event.id+1;
    }
    else{
        id=1;
    }
    const event =new Event({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,

    })
    console.log(event);
    await event.save();
    console.log('Saved');
    res.json({
        success: true,
        name:req.body.name,
    })
})

//creating apii for deleting products

app.post('/removeevent', async (req, res) => {
  
      await Event.findOneAndDelete({ id:req.body.id });
      console.log("removed");
      res.json({ success: true, 
                name: req.body.name 
            })
  
  })

  //creating api for getting all events
  app.get('/allevents', async (req,res)=>{
    let events = await Event.find({});
    console.log("all product fetched");
    res.send(events);
  })


//schema creating for user model
const Users=mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    collegeId:{
        type:String,
    },
    cartData: {
        type: Object,
    },
    date:{
       type:Date,
       default:Date.now,
    }
});

//creating endpoint for registering user
app.post('/signup',async(req,res)=>{

    let check=await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:"User with email already exists"});
    }

    let cart ={};
    for (let i = 0; i < 300; i++) {
        cart[i]=0;
        
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })

    await user.save();

    const data ={
        user:{
            id:user.id
        }
    }


    const token = jwt.sign(data,'secret_hackhub');
    res.json({success:true ,token})
})


// creating end point for user login
app.post('/login', async(req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if(user){
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data ={
                user:{
                    id:user.id,
                }
            }
            const token=jwt.sign(data,'secret_hackhub')
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"Wrong password"});
        }
    }
    else{
        res.json({success:false,errors:"Wrong email"});
    }
})


// creating  end point for newcollcection
app.get('/newcollections',async (req,res)=>{
    let events= await Event.find({});
    let newcollection =events.slice(1).slice(-9);
    console.log("new collection fetched");
    res.send(newcollection);
})

// creating end point for popular in pune section
app.get('/popularinpune',async(req,res)=>{
    let events = await Event.find({category: 'inpune'});
    let popular_in_pune = events.slice(0,4);
    console.log("popular in pune fetched");
    res.send(popular_in_pune);
})

//creating middleware to fetch user
    const fetchUser = async(req,res,next)=>{
        const token =  req.header('auth-token');
        if(!token){
            res.status(401).send({errors:"Please authenticate using valid token"});
        }
        else{
            try{
                const data = jwt.verify(token,'secret_hackhub');
                req.user=data.user;
                next();
            } catch (error){
                res.status(401).send({errors:"Please authenticate using a valid token"});
            }
        }
    }

//creating end point for adding in cart data
app.post('/addtocart',fetchUser,async(req,res)=>{
    console.log("added",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.json({ message: "Added" });

});

// ccreating end point to remove event from cart
app.post('/removefromcart',fetchUser,async(req,res)=>{
    console.log("removed",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.json({ message: "removed" });
});

// creating endpoit to get cartdata
app.get('getcart',fetchUser,async(req,res)=>{
    console.log("getcart");
    let userData = await Users.findOne({_id:req.user.id});
    res.json(userData.cartData);
})

app.listen(port,(error)=>{
    if (!error){
        console.log("server running on port " + port)
    }
    else{
        console.log('Error :'+error)
    }
});
