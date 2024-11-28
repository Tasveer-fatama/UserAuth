import mongoose from 'mongoose'

 export const connection=async(URL)=>{
    try {
    await mongoose.connect(URL)
      console.log("DB Connected successfully");
      
        
    } catch (error) {
       console.log(error);
        
    }
}