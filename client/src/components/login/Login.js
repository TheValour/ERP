import React from 'react'
import { Link } from "react-router-dom";

import img from '../../image/gehuHome.jpg'
import bannner from '../../image/banner.png'

function Login() {
  return (
    <div
      className="h-screen w-screen backdrop-blur-md absolute"
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}>
        
      <div className='w-1/5 h-3/5 bg-gray-800 opacity-95 relative left-3/4 top-40 flex items-center justify-between flex-col rounded-md'>
        <img src={bannner} alt='img'/>
        <div>
          <span className=' font-semibold text-gray-300 text-xl'>Login </span> <span className='text-gray-500'> as</span>
        </div>
        <Link
          type="button"
          to="/login/facultylogin"
          className="bg-blue-500 h-10 w-32 text-lg rounded-lg text-white FLEX">
          Faculty 
        </Link>
        <Link
          type="button"
          to="/login/studentlogin"
          className="bg-blue-500 h-10 w-32 text-lg rounded-lg text-white FLEX mb-8">
          Student
        </Link>
      </div>
    </div>
  )
}

export default Login