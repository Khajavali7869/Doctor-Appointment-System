// import React from 'react';
// import { assets } from '../assets/assets.js';

// const Header = () => {
//   return (
//     <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-16 bg-[#5E7BF7]">
      
//       {/* ---- Left Section ---- */}
//       <div className="md:w-1/2 flex flex-col items-start gap-6">
//         <p className="text-3xl md:text-4xl lg:text-5xl text-white font-extrabold leading-tight">
//           Book Appointment <br /> With Trusted Doctors
//         </p>

//         <div className="flex items-start gap-4">
//           <img src={assets.group_profiles} alt="Group Profiles" className="w-[90px] h-10 mt-1 rounded-full" />
//           <p className="text-white text-sm md:text-base">
//             Simply browse through our extensive list of trusted doctors, <br />
//             schedule your appointment hassle-free.
//           </p>
//         </div>

//         <a
//           href="/appointment"
//           className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-100 transition-all"
//         >
//           Book Appointment
//           <img src={assets.arrow_icon} alt="Arrow Icon" className="w-4 h-4 " />
//         </a>
//       </div>

//       {/* ---- Right Section ---- */}
//       <div className="mt-10 md:mt-0">
//         <img src={assets.header_img} alt="Header" className="w-[500px] h-auto object-contain" />
//       </div>

//     </div>
//   );
// };

// export default Header;
import React from 'react';
import './header.css';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="header-container">
      {/* ---- Left ---- */}
      <div className="header-left">
        <p className="header-title">
          Book Appointment <br /> With Trusted Doctors
        </p>

        <div className="header-description">
          <img src={assets.group_profiles} alt="Group Profiles" />
          <p>
            Simply browse through our extensive list of trusted doctors, <br />
            schedule your appointment hassle-free.
          </p>
        </div>

        <a href="#speciality" className="book-btn">
          Book Appointment
          <img src={assets.arrow_icon} alt="Arrow Icon" />
        </a>
      </div>

      {/* ---- Right ---- */}
      <div className="header-right">
        <img src={assets.header_img} alt="Header" />
      </div>
    </div>
  );
};

export default Header;
