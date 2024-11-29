import express from "express"
import {connection} from "./DB.js"
import router from "./route/userRouter.js";
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors());
app.use("/",router);
app.use("/signup",router);

const PORT=4000;

const db_URL= "mongodb://localhost:27017/UserAuth"                                            
connection(db_URL);
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
    
})