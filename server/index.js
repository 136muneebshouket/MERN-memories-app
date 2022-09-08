
require('dotenv').config();
const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose")
const app = express();
// const multer = require("multer");

const UserModel = require("./Users")
app.use(express.json())
app.use(cors())
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb', extended: true}));


app.get('/',(req,res)=>{

    res.send('hello to sweet memories api')
})





const DB = process.env.DATABASE;
// mongoose.connect("mongodb+srv://root:root@cluster0.fsahq.mongodb.net/test")
mongoose.connect(DB,{ useUnifiedTopology: true ,  useNewUrlParser: true})


//image upload
// var storage = multer.diskStorage({
//  destination: function (req,file,cb){
//     cb(null,"./uploads");

//  },
//  filename:function (req,file,cb){

// cb(null, file.fieldname + "_" + file.originalname);
//  },

// })

// var upload = multer({
//     storage:storage
// }).single('image');



app.get("/getUsers", (request, response) => {
    UserModel.find({}, (err, result) => {
        if (!err) {
            response.json(result)
        } else {
            response.json(err)
        }
    })
})



// app.get("/", (request, response) => {
//     response.send("getting data")
// })



app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save()

    res.json(user)
})






// app.put("/updateUser", (req, res) => {

//     const { id, name, image, discription} = req.body

//     try {
//         UserModel.findById(id, (err, user) => {
//             // console.log(user)
//             user.name = name
//             // user.age = age
//             user.image = image
//             user.discription = discription
            
//             user.save()
//             res.send("User has been successfully updated in DB")
//         })
//     }
//     catch (err) {
//         res.send("Getting error from server")
//     }
// })






app.delete("/deleteUser/:id", async (req, res) => {
    const id = req.params.id

    await UserModel.findByIdAndRemove(id).exec()
    res.send("User has been successfully deleted from DB")
})





const PORT = process.env.PORT || "8000";
app.listen(PORT, () => {
    console.log(`Server is running perfectly on ${PORT}`)
})