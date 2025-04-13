import React from 'react'
import { assets } from '../assets/assets'
import './Header.jsx';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate=useNavigate();
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col lg:flex-row justify-between gap-14 my-10 mt-40 text-base'>

        <div className='lg:w-1/2'>
          <img className='mb-5 w-48' src={assets.logo} alt="Prescripto Logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-relaxed tracking-wide'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolores magni incidunt cum quis nobis, 
            suscipit obcaecati libero veritatis ducimus expedita voluptate quibusdam fuga, nihil labore sed velit 
            impedit ullam.
          </p>
        </div>

     
        <div className='flex flex-col sm:flex-row gap-14 lg:w-1/2'>

          
          <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
              <li className='hover:text-black cursor-pointer' onClick={()=>{navigate('/'); }}> Home</li>
              <li className='hover:text-black cursor-pointer' onClick={()=>{navigate('/about'); }}>About us</li>
              <li className='hover:text-black cursor-pointer' onClick={()=>{navigate('/contact'); }}>Contact us</li>
              <li className='hover:text-black cursor-pointer'>Privacy Policy</li>
            </ul>
          </div>

         
          <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
              <li className='hover:text-black cursor-pointer'>+91 6303657038</li>
              <li className='hover:text-black cursor-pointer'>shaikkhajavali0001@gmail.com</li>
            </ul>
          </div>

        </div>
      </div>

     
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          © 2024 Prescripto – All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
