const express = require('express')
const app = express()
const port = 3000
const path = require('path')

//Create Server
app.get('/user', (req, res) => {
  res.send('Hello World')
})

//Render Image
app.get('/pic', (req, res) => {
  let ImagePath = path.join(__dirname,'peach-rose.jpg');
  res.sendFile(ImagePath)
})


//Dynamic Image and Not Found Error
app.get('/dynamicimage', (req, res) => {
  ImageName = req.query.imagename
  //let ImagePath = path.join(__dirname, ImageName);
  if(ImageName =='image1.jpg')
  {
    let ImagePath = path.join(__dirname, ImageName);
    res.sendFile(ImagePath)
  }
  else if(ImageName == 'image2.jpg')
  {
    ImagePath = path.join(__dirname, ImageName);
    res.sendFile(ImagePath)
  }
  else{
    res.send('Image Not Found')
  }
 // res.sendFile(ImagePath)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


