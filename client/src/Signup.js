import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
    const initialState ={
        name:"",
        email:"",
        password:"",
        cpassword:"",
    }
    const [signup,setSignup]= useState(initialState);
    const navigate = useNavigate(); 
    const inputHandler =(e)=>{
      // console.log('Name:', e.target.name, 'Value:', e.target.value);
        setSignup({...signup, [e.target.name]: e.target.value});
    }
    const submitHandler =async(e)=>{
        e.preventDefault();
        console.log(signup);
       
       const response=await axios.post("http://localhost:4000/signup",signup) 
       navigate("/");
    }
  return (
    <div className='flex justify-center items-center  h-screen'>
      <div className="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
  <h2 className="text-2xl font-bold pb-5">SignUp</h2>
  <form onSubmit={submitHandler}>
    <div className="mb-4">
      <label htmlFor="name" className="block mb-2 text-sm font-medium">
        Your name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={inputHandler}
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
        placeholder="Andrew Jackson"
        required=""
        defaultValue=""
      />
    </div>
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
    <div className="mb-4">
      <label htmlFor="password" className="block mb-2 text-sm font-medium">
        Confirm password
      </label>
      <input
        type="password"
        id="cpassword"
        name="cpassword"
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
        SignUp
      </button>
      <div className="flex items-center text-sm">
        <p>Already have an account?</p>
        <Link to="/">  <p className="underline cursor-pointer ml-1">Login</p></Link>
      
      </div>
    </div>
  </form>
</div>

    </div>
  )
}

export default Signup
