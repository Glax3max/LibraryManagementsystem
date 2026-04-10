import express from "express";
import cors from "cors";
import userRoutes from "./routes/users.routes.js";
import bookRoutes from "./routes/books.routes.js";
import issueRoutes from "./routes/issues.routes.js";
import publishRoutes from "./routes/publishers.routes.js";
import authorRoutes from "./routes/authors.routes.js";
import mongoose from "mongoose";
const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/library3?")
.then(()=> {
    console.log("Connected successfuly")
})
.catch(()=> {
    console.log("Error connecting to DB")
})
app.use(cors(
    {
        "origin":"http://localhost:5746", //frontend url
    }
));
app.use(express.urlencoded({extended:true}))

// routes
app.use("/api/books",bookRoutes)
app.use("/api/users",userRoutes)
app.use("/api/issues",issueRoutes)
app.use("/api/publishers",publishRoutes)
app.use("/api/authors",authorRoutes)

app.get("/health",(req,res)=> {
    console.log("Checked")
    res.json("Health checked");
})
export default  app;