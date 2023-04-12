
import  express  from "express";
import  bodyParser  from "body-parser";
import mongoose from "mongoose";
import Data from "./models/dataSchema.js";
import dotenv from "dotenv"

import Dbconnect from "./config/dbConnect.js";


  Dbconnect.then(() => {
    console.log("monogDB connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/data", async (req, res) => {
  const data = await Data.find();
  console.log(data);
  res.json(data);
});

app.post("/user", async (req, res) => {
    try {
      let user = new Data(req.body)
      await user.save()
      res.send(user)
        console.log(user)
    } catch (error) {
        res.send(error)
    }
});

app.put("/data/:id", (req, res) => {
  Data.findByIdAndUpdate(req.params.id, req.body, (err) => {
    res.json({ message: `updated data ${req.params.id}` });
  });
});


app.delete('/data/:id', (req, res) => {
    Data.findByIdAndDelete(req.params.id ,req.body, (err) =>{
        res.json({ message: `deleted data ${req.params.id}` });
    })
});

app.listen(port, () => {
  console.log(`Server started on: ${port}`);
});
