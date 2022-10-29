const express=require("express")
const { route }= require("express/lib/application")

const Detail=require("../models/Detail")


const routes=express.Router()
routes.get("/", async(req,res)=>{

const details=await Detail.findOne({"_id":"635c1ac41372a8b12b93803e"})

// console.log(details)
res.render("index", {
    details:details
})  

})


routes.get('/gallery',async(req, res)=>{
    const details=await Detail.findOne({"_id":"635c1ac41372a8b12b93803e"})
    res.render("gallery",{
        details:details
    })  
    
})







module.exports=routes