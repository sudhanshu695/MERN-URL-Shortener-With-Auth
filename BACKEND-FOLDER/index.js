import express from "express";
import router from "./routes/routes.js";
import connectMongo from "./connectMongo.js";
import { URL } from "./models/url.js";
import cors from 'cors'

const app = express();
const PORT = 8000;

connectMongo("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("Mongo Connected")
);

//When you send a request with a JSON body (like from Postman or frontend): Express by default cannot read this body.
app.use(express.json()); //using this middleware
//whenever a request comes with JSON in its body,
// please parse it, convert it into a JavaScript object,
// and attach it to req.body



app.use(cors({
  origin: "http://localhost:5173",   // your React app
    methods: ["GET", "POST"]
}));




app.use("/url", router);

app.use("/:shortId",router);

app.use("/analytics",router);

app.listen(PORT, () => console.log(`Server up at server : ${PORT}`));
