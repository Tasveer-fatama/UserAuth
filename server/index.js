import express from "express"
import {connection} from "./DB.js"

const app = express();



const PORT=4000;

const db_URL= "mongodb://localhost:27017/UserAuth"                                            
connection(db_URL);
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
    
})