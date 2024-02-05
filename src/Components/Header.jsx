import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
function Header() {
  return (

    <>
      <div className=' bg-[#2699fb] p-4   '>

<div className=' max-w-[1240px] py-3 mx-auto flex justify-between items-center'>


        <div className='text-3xl font-medium'>Static Web</div>

        <AiOutlineMenu  className='md:hidden  text-3xl'/>

        <ul className='hidden md:flex gap-10 text-white '>
          <li> <a href="#">Home</a></li>
          <li> <a href="#">Company</a></li>

          <li> <a href="#">Resources</a></li>
          <li> <a href="#">About</a></li>
          <li> <a href="#">Contact</a></li>


        </ul>





        </div>


        <ul className='md:hidden block  text-white w-full text-xl  '>
          <li className='py-3  hover:text-black'> <a href="#">Home</a></li>
          <li className='py-3  hover:text-black'> <a href="#">Company</a></li>

          <li className='py-3  hover:text-black'> <a href="#">Resources</a></li>
          <li className='py-3  hover:text-black'> <a href="#">About</a></li>
          <li className='py-3  hover:text-black'> <a href="#">Contact</a></li>


        </ul>

      </div>


    </>

  )
}

export default Header