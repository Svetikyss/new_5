const express = require('express')
const path = require('path')

 const app = express()
  app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'.._index.html'))
  })

  const port = process.env.PORT || 4005


  app.listen(port,()=>{
    console.log('Listning on port ${port}')
  })