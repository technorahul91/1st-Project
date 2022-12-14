const express = require("express")
const hbs = require("hbs")

const app = express()

const mongoose = require("mongoose")
const bodyParser= require("body-parser")
const routes = require('./routes/main')   //take all our routes from main.js which is in routes folder//
const Detail = require("./models/Detail")
const Slider = require("./models/Slider")
const slider = require("./models/Slider")
const Service = require("./models/Service")


app.use(bodyParser.urlencoded({
    extended:true
}))

app.use('/static', express.static("public"))
app.use('', routes)


//template engine

app.set("view engine", "hbs") //set view engine to hbs//
app.set("views", "views")
hbs.registerPartials("views/partials")

//db connection//
mongoose.connect("mongodb://localhost:27017/website_tut", () => {
    console.log("db connected")
    




/*
   Service.create([
        {
            icon:"fas fa-yin-yang",
            title:"Provide Best Courses",
            description:"We provide best courses that helps students in learning coding.",
            linkText:"Check",
            link:"https://www.arets.com"
           

        },
        {
            icon:"fas fa-users-class",
            title:"Provide one to one mentorship",
            description:"We provide one to one mentorship so that it helps students to make communication interactive.",
            linkText:"Sessions",
            link:"https://www.mylecttut.com"
            

        },
        {
            icon:"fas fa-user-graduate",
            title:"Provide genuine curriculum",
            description:"We design a curriculum best suitable for industry demands.",
            linkText:"Curriculum",
            link:"https://www.mycurriculm.com"
           

        }
    ])*/
    /*Detail.create({
        brandName:"ARE-Techs",
        brandIconUrl:"data:image/jpeg;base64,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",
        links:[{
            label:"Home",
            url:"/"
        },
        {
            label:"Services",
            url:"/services"
        },
        {
            label:"Gallery",
            url:"/gallery"
        },
        {
            label:"About",
            url:"/about"
        },
        {
            label:"Contact Us",
            url:"/contact-us"
        }
        

    ],
    
    })  */



    /* Slider.create([
         {
             title:"Learn Javascript",
             subTitle:"Very usefull in frontend development.....",
             imageUrl:"/static/images/cod1.webp"
 
         },
 
         {
             title:"Learn NodeJS",
             subTitle:"Very usefull in backend development.....",
             imageUrl:"/static/images/coding.jpg"
 
         },
 
         {
             title:"Learn Mongodb",
             subTitle:"Popular database.....",
             imageUrl:"/static/images/slider2.png"
 
         }
     ])*/

})
app.listen(process.env.PORT | 5500, () => {
    console.log("server started")
})