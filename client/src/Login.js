import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const Login = () => {
    const initialState ={
        email:"",
        password:"",
    }
    const [login,setLogin]= useState(initialState);
    const inputHandler =(e)=>{
      // console.log('Name:', e.target.name, 'Value:', e.target.value);
        setLogin({...login, [e.target.name]: e.target.value});
    }
    const submitHandler =async(e)=>{
        e.preventDefault();
        console.log(login);
      try {
        const response=await axios.get("http://localhost:4000/");
        const exist = response.data.users.find((user)=>{
          return user.email ===login.email;
        })
        if(!exist){
          alert("user are not exist")
        }
      } catch (error) {
        console.log(error);
        
      }  
    }
  return (
    <div>
       <div className='flex justify-center items-center  h-screen'>
      <div className="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
  <h2 className="text-2xl font-bold pb-5">Login</h2>
  <form onSubmit={submitHandler}>
   <div className="mb-4">
      <label htmlFor="email" className="block mb-2 text-sm font-medium">
        Your email
      </label>
      <input
        type="email"
        id="email"
        name="email"
         onChange={inputHandler}
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
        placeholder="andrew@mail.com"
        required=""
        defaultValue=""
      />
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="block mb-2 text-sm font-medium">
        Your password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={inputHandler}
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
        placeholder="*********"
        required=""
        defaultValue=""
      />
    </div>
  
    <div>
      <p className="text-red-500 pb-5" />
    </div>
    <div className="flex items-center justify-between mb-4">
      <button
        type="submit"
        className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
      >
        Login
      </button>
      <div className="flex items-center text-sm">
        <p>Don't have an account?</p>
        <Link to="/signup"> <p className="underline cursor-pointer ml-1">SignUp</p></Link>
       
      </div>
    </div>
  </form>
</div>

    </div>
    </div>
  )
}

export default Login
