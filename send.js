 console.log("bla bla bla");
 const a=require("./input")
 console.log(a); 


//-----------------------------------------------------------------
const express = require('express')
const app = express()
const port = 3000;
const cors = require("cors");


app.use(cors('*'));

app.get('/', (req, res) => {
  res.send(a);

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

