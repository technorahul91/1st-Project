const { request, response } = require("express")
const express = require("express")
const { route } = require("express/lib/application")
const Contact = require("../models/Contact")

const Detail = require("../models/Detail")
const Service = require("../models/Service")
const Slider = require("../models/Slider")


const routes = express.Router()



routes.get("/", async (req, res) => {
    const details = await Detail.findOne({ "_id": "635c1ac41372a8b12b93803e" })
    const slides = await Slider.find()
    const services=await Service.find()
    //console.log(slides)
    // console.log(details)
    res.render("index", {
        details: details,
        slides: slides,
        services:services

    })

})

routes.post("/process-contact-form",async(req,res)=>{
    console.log(req.body)

    //save data in db
    try{

const data=await Contact.create(req.body)
console.log(data)
res.redirect("/")

    }catch(e)
    {
        console.log(e)
        res.redirect("/")
    }
})

routes.get('/gallery', async (req, res) => {
    const details = await Detail.findOne({ "_id": "635c1ac41372a8b12b93803e" })
    res.render("gallery", {
        details: details
    })

})


routes.get('/candidate', async (req, res) => {
    const details = await Detail.findOne({ "_id": "635c1ac41372a8b12b93803e" })
    res.render("candidate", {
        details: details
    })

})






module.exports = routes