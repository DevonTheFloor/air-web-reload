const express = require('express');
const app = express();
const fs = require('fs');
const airRoutes = require('./routes/airroutes')

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json());


app.use("/api/coucou",(req,res,next)=>{
  res.status(200).json({message:"A que COUCOU !!"});
});

app.use('/', airRoutes);


module.exports = app;