// const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/lec-10");

// const Car = mongoose.model("Car", { type: String });

// const cat1 = new Car({ type: "audi" });

// cat1
//     .save()
//     .then(() => {
//         console.log("car added");
//     })
//     .catch((e) => {
//         console.log(e);
//     });
//////////////////////////////////////////////////////////
const bcrypt=require('bcryptjs');
const passwordFunction=async()=>{
    const password ="is258369";
    const hashPass=await bcrypt.hash(password,8);
    const compare=await bcrypt.compare(password+"",hashPass)
}

passwordFunction();





const express=require('express')

const app=express()

const port=process.env.PORT||3000

require("./db/mongoose")

app.use(express.json())

const userRouter=require("./routers/user")

app.use(userRouter)


app.listen(port,()=>{console.log("all done successfully")})