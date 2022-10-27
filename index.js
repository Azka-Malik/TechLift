const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.get('/user', (req, res) => {
  res.send('Hello World')
})

app.get('/pic', (req, res) => {
  let ImagePath = path.join(__dirname,'peach-rose.jpg');
  res.sendFile(ImagePath)
})

app.get('/dynamicimage', (req, res) => {
  let ImageName = req.query.imagename
  let ImagePath = path.join(__dirname, ImageName);
  
  res.sendFile(ImagePath)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


