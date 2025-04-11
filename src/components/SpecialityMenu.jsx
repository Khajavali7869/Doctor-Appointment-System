import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
      <h1 className="text-3xl font-bold">Find by Speciality</h1>
      <p className="text-center max-w-xl">
        Simply browse through our extensive list of trusted doctors,
        schedule your appointment hassle-free.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {specialityData.map((item, index) => (
          <Link onClick={()=>scrollTo(0,0)}  key={index} to={`/doctor/${item.speciality}`} className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg shadow hover:scale-105 transition">
            <img src={item.image} alt={item.speciality} className="w-20 h-20 object-cover rounded-full" />
            <p className="text-sm font-medium">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu;
