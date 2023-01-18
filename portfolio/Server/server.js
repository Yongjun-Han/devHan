const express = require("express");
const axios = require("axios");
const cors = require("cors");


const app = express()

app.use(cors())

app.get('/', (req,res)=>{
  res.send({test : '서버'})
})

// app.get("/", async (req, res) => {
//   try {
//     let result = await axios({
//       method: "get",
//       // url : `https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=${address}`,
//       url: "https://naveropenapi.apigw.ntruss.com/map-direction-15/v1/driving?start=127.392416,36.343457&goal=127.377575,36.34925&cartype=4",
//       headers: header,
//     });
//     const resultMsg = result.data;
//     console.log(typeof resultMsg);
//     res.send(resultMsg);
//   } catch (err) {
//     console.log(err);
//   }
// });

app.listen(8282, () => {
  console.log("server on port : 8282");
});