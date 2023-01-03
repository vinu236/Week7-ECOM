const express=require('express')
const app=express()
const mongoose = require("mongoose");
require('dotenv').config()




 
  module.exports={
    CONNECT:async()=>{
        try {
          mongoose
          .connect("mongodb://localhost:27017/E-commerce")
          .then(() => {
            console.log("DB Connected");
           
          })
          .catch((err) => {
            console.log(err);
          });
        } catch (error) {
         
            
            console.log(error)
        }
    }
  }