
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors'; 


const Appointment = () => {
  const { docId } = useParams(); 
  const { doctors,currencySymbol } = useContext(AppContext);
   const daysOfWeek=['SUN','MON','TUE','WED','THU','FRI','SAT']
  const [docInfo, setDocInfo] = useState(null);
   const [docSlots,setDocSlots]=useState([])
   const [slotIndex,setSlotIndex]=useState(0)
   const [slotTime,setSlotTime]=useState('')

   const getAvailableSlots=async()=>{
     setDocSlots([])
    
     let today=new Date()
     for(let i=0;i< 7 ;i++){
      let currentDate=new Date(today)
      currentDate.setDate(today.getDate()+i)
      let endTime=new Date()
      endTime.setDate(today.getDate()+i)
      endTime.setHours(21,0,0,0)

      if(today.getDay()===currentDate.getDate()){
        currentDate.setHours(currentDate.getHours()>10 ? currentDate.getHours()+1 : 10)
        currentDate.setMinutes(currentDate.getMinutes()>30 ? 30 : 0)
      }
      else{
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }
      let timeSlots=[]
      while(currentDate<endTime){
        let formattedTime=currentDate.toLocaleTimeString([],{hour : '2-digit',minute: '2-digit'})
timeSlots.push(
  {
    datetime:new Date(currentDate),
    time:formattedTime
  })
  currentDate.setMinutes(currentDate.getMinutes()+30)
      }
      setDocSlots(prev=>([...prev,timeSlots]))
     }
   }
  useEffect(() => {
    if (doctors.length > 0 && docId) {
      const doc = doctors.find(doc => doc._id === docId);
      setDocInfo(doc);
      console.log(doc);
    }
  }, [doctors, docId]);

  useEffect(()=>{
getAvailableSlots()
  },[docInfo])
  useEffect(()=>{
console.log(docSlots);
  },[docSlots])

  return docInfo && (
    <div className="p-4">
      {/*----doctor details----*/}
      <div className='flex flex-col sm:flex-row gap-4 border border-gray-300 rounded-xl p-4 bg-white'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt={docInfo.name} />
        </div>
        <div className='flex-1 rounded-lg p-4'>
          {/*---doc info----*/}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo.name} 
            <img className='w-5' src={assets.verified_icon} alt="verified" />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>
          {/*-----doctor about---*/}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
              About <img src={assets.info_icon} alt="info" />
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>Appointment fee:<span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span></p>
        </div>
      </div>
         {/*--booking---*/}
         <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
            <p>Booking slots</p>
            <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
                {
                docSlots.length &&docSlots.map((item,index)=>(
                  
                  <div onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex===index ? 'bg-primary text-white' : 'border border-gray-200 ' }`} key={index}>
                    <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                    <p>{item[0] && item[0].datetime.getDate()}</p>

                 </div>
                ))
                }
            </div>
            <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4 '>
                {docSlots.length && docSlots[slotIndex].map((item,index)=>(
                  <p onClick={()=>setSlotTime(item.time)}  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time===slotTime ? 'bg-primary text-white' : 'border border-gray-400 '}`} key={index}>
                    {item.time.toLowerCase()}
                  </p>

                )) } 
            </div>
            <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'> Book an Appointment</button>
         </div>
         {/*---related doctors--- */}
         <RelatedDoctors docId={docId} speciality={docInfo.speciality} />

        </div>
  );
};

export default Appointment;


// import React, { useContext, useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { AppContext } from '../context/AppContext';
// import { assets } from '../assets/assets';

// const Appointment = () => {
//   const { docId } = useParams();
//   const navigate = useNavigate();
//   const { doctors, currencySymbol } = useContext(AppContext);

//   const [docInfo, setDocInfo] = useState(null);
//   const [docSlots, setDocSlots] = useState([]);
//   const [slotIndex, setSlotIndex] = useState(0);
//   const [slotTime, setSlotTime] = useState('');

//   // Fetch current doctor info
//   useEffect(() => {
//     if (doctors.length > 0 && docId) {
//       const doc = doctors.find(doc => doc._id === docId);
//       setDocInfo(doc);
//     }
//   }, [doctors, docId]);

//   // Generate available slots
//   const getAvailableSlots = () => {
//     let today = new Date();
//     let allSlots = [];

//     for (let i = 0; i < 7; i++) {
//       let currentDate = new Date(today);
//       currentDate.setDate(today.getDate() + i);
//       let endTime = new Date(currentDate);
//       endTime.setHours(21, 0, 0, 0);

//       if (today.getDate() === currentDate.getDate()) {
//         currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
//         currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
//       } else {
//         currentDate.setHours(10);
//         currentDate.setMinutes(0);
//       }

//       let timeSlots = [];
//       while (currentDate < endTime) {
//         let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//         timeSlots.push({
//           datetime: new Date(currentDate),
//           time: formattedTime,
//         });
//         currentDate.setMinutes(currentDate.getMinutes() + 30);
//       }

//       allSlots.push(timeSlots);
//     }

//     setDocSlots(allSlots);
//   };

//   useEffect(() => {
//     if (docInfo) {
//       getAvailableSlots();
//     }
//   }, [docInfo]);

//   return docInfo && (
//     <div className="p-4">
//       {/* Doctor Info */}
//       <div className='flex flex-col sm:flex-row gap-4 border border-gray-300 rounded-xl p-4 bg-white'>
//         <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt={docInfo.name} />
//         <div className='flex-1 rounded-lg p-4'>
//           <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
//             {docInfo.name}
//             <img className='w-5' src={assets.verified_icon} alt="verified" />
//           </p>
//           <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
//             <p>{docInfo.degree} - {docInfo.speciality}</p>
//             <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
//           </div>
//           <div>
//             <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
//               About <img src={assets.info_icon} alt="info" />
//             </p>
//             <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
//           </div>
//           <p className='text-gray-500 font-medium mt-4'>
//             Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
//           </p>
//         </div>
//       </div>

//       {/* Booking Slots */}
//       <div className="mt-8 bg-white p-4 rounded-xl ">
//         <h3 className="text-xl font-semibold mb-4 text-gray-800">Booking Slots</h3>
//         <div className='flex gap-2 mb-4 overflow-x-auto'>
//           {docSlots.map((_, index) => {
//             const day = new Date();
//             day.setDate(day.getDate() + index);
//             const formatted = day.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric' });
//             return (
//               <button
//                 key={index}
//                 className={`py-2 px-4 rounded-full border text-sm ${slotIndex === index ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'}`}
//                 onClick={() => {
//                   setSlotIndex(index);
//                   setSlotTime('');
//                 }}
//               >
//                 {formatted}
//               </button>
//             );
//           })}
//         </div>
//         <div className='flex flex-wrap gap-3'>
//           {docSlots[slotIndex]?.map((slot, i) => (
//             <button
//               key={i}
//               className={`px-4 py-2 rounded-full border text-sm ${slot.time === slotTime ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'}`}
//               onClick={() => setSlotTime(slot.time)}
//             >
//               {slot.time}
//             </button>
//           ))}
//         </div>
//         <button
//           className='mt-6 bg-primary text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600 transition'
//           disabled={!slotTime}
//         >
//           Book an appointment
//         </button>
//       </div>

//       {/* Related Doctors */}
//       <div className='mt-12'>
//         <h3 className='text-2xl font-semibold mb-2 text-center'>Related Doctors</h3>
//         <p className='text-sm text-gray-500 text-center mb-6'>Doctors with similar specialities you may also consider.</p>
//         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
//           {doctors
//             .filter(doc => doc.speciality === docInfo.speciality && doc._id !== docInfo._id)
//             .map((doc, index) => (
//               <div
//                 key={index}
//                 onClick={() => navigate(`/appointment/${doc._id}`)}
//                 className='cursor-pointer border rounded-xl p-4 bg-white text-center hover:shadow-md transition'
//               >
//                 <img src={doc.image} alt={doc.name} className='w-full h-32 object-cover rounded-md mb-3' />
//                 <p className='text-xs text-green-600 mb-1'>● Available</p>
//                 <p className='font-medium text-gray-900'>{doc.name}</p>
//                 <p className='text-sm text-gray-500'>{doc.speciality}</p>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };


// export default Appointment;
