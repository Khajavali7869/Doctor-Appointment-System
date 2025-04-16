import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets.js';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400'>
      <img
        className='w-44 cursor-pointer h-5'
        src={assets.logo}
        alt="Logo"
        onClick={() => navigate('/')}
      />

      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-blue-500 ${isActive ? 'border-b-2 border-blue-500' : ''}`
          }
        >
          <li className='py-1'>HOME</li>
        </NavLink>
        <NavLink
          to="/doctor"
          className={({ isActive }) =>
            `hover:text-blue-500 ${isActive ? 'border-b-2 border-blue-500' : ''}`
          }
        >
          <li className='py-1'>ALL DOCTOR</li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:text-blue-500 ${isActive ? 'border-b-2 border-blue-500' : ''}`
          }
        >
          <li className='py-1'>ABOUT</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `hover:text-blue-500 ${isActive ? 'border-b-2 border-blue-500' : ''}`
          }
        >
          <li className='py-1'>CONTACT</li>
        </NavLink>
      </ul>

      <div className='flex items-center gap-4'>
        { token ? (
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img
              className='w-8 rounded-full'
              src={assets.profile_pic}
              alt="User Profile"
            />
            <img
              className='w-2.5'
              src={assets.dropdown_icon}
              alt="Dropdown Icon"
            />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={() => navigate('my-appointment')} className='hover:text-black cursor-pointer'>My Appointments</p>
                <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}
       
        <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
          {/*--MOBILE MENU---*/}
        <div className={` ${showMenu ? 'fixed w-full ' : 'h-0 w-0' } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6 '>
            <img className='w-36' src={assets.logo} alt="" />
            <img className='w-7' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium '>
             <NavLink  onClick={()=>setShowMenu(false)} to='/'> <p className='px-4 py-2 rounded  inline-block '>HOME</p></NavLink>
             <NavLink  onClick={()=>setShowMenu(false)}  to='/doctor'> <p className='px-4 py-2 rounded  inline-block '>ALL DOCTORS</p> </NavLink>
             <NavLink   onClick={()=>setShowMenu(false)}  to='/about'><p className='px-4 py-2 rounded  inline-block '>ABOUT</p></NavLink>
             <NavLink  onClick={()=>setShowMenu(false)}  to='/contact'><p className='px-4 py-2 rounded  inline-block '>CONTACT</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

// import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { assets } from '../assets/assets.js';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [showMenu, setShowMenu] = useState(false);
//   const [token, setToken] = useState(true);

//   const toggleMenu = () => {
//     setShowMenu(prev => !prev);
//   };

//   return (
//     <div className='relative'>
//       <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400 px-4 md:px-10'>
//         <img
//           className='w-44 cursor-pointer h-5'
//           src={assets.logo}
//           alt="Logo"
//           onClick={() => navigate('/')}
//         />

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-start gap-5 font-medium">
//           {["/", "/doctor", "/about", "/contact"].map((path, i) => {
//             const labels = ["HOME", "ALL DOCTOR", "ABOUT", "CONTACT"];
//             return (
//               <NavLink
//                 key={i}
//                 to={path}
//                 className={({ isActive }) =>
//                   `hover:text-blue-500 ${isActive ? 'border-b-2 border-blue-500' : ''}`
//                 }
//               >
//                 <li className='py-1'>{labels[i]}</li>
//               </NavLink>
//             );
//           })}
//         </ul>

//         {/* Hamburger Icon for Mobile */}
//         <div className='md:hidden cursor-pointer' onClick={toggleMenu}>
//           <img src={assets.menu_icon} alt="menu" className='w-6 h-6' />
//         </div>

//         {/* User Section */}
//         <div className='hidden md:flex items-center gap-4'>
//           {token ? (
//             <div className='flex items-center gap-2 cursor-pointer group relative'>
//               <img className='w-8 rounded-full' src={assets.profile_pic} alt="User Profile" />
//               <img className='w-2.5' src={assets.dropdown_icon} alt="Dropdown Icon" />
//               <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
//                 <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
//                   <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
//                   <p onClick={() => navigate('my-appointment')} className='hover:text-black cursor-pointer'>My Appointments</p>
//                   <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <button
//               onClick={() => navigate('/login')}
//               className="bg-primary text-white px-8 py-3 rounded-full font-light"
//             >
//               Create Account
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {showMenu && (
//         <div className="md:hidden flex flex-col bg-white border-t border-gray-300 px-6 pb-4 z-50">
//           {["/", "/doctor", "/about", "/contact"].map((path, i) => {
//             const labels = ["HOME", "ALL DOCTOR", "ABOUT", "CONTACT"];
//             return (
//               <NavLink
//                 key={i}
//                 to={path}
//                 onClick={() => setShowMenu(false)}
//                 className={({ isActive }) =>
//                   `py-2 hover:text-blue-500 ${isActive ? 'text-blue-600 font-semibold' : ''}`
//                 }
//               >
//                 {labels[i]}
//               </NavLink>
//             );
//           })}
//           <div className="mt-4">
//             {token ? (
//               <>
//                 <p onClick={() => {navigate('my-profile'); setShowMenu(false);}} className='py-2 cursor-pointer'>My Profile</p>
//                 <p onClick={() => {navigate('my-appointment'); setShowMenu(false);}} className='py-2 cursor-pointer'>My Appointments</p>
//                 <p onClick={() => {setToken(false); setShowMenu(false);}} className='py-2 cursor-pointer text-red-500'>Logout</p>
//               </>
//             ) : (
//               <button
//                 onClick={() => {navigate('/login'); setShowMenu(false);}}
//                 className="w-full bg-primary text-white px-4 py-2 rounded-full mt-2"
//               >
//                 Create Account
//               </button>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
