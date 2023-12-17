import React from 'react'

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";

const Business = () => {
  return (
   <>
   <h2 className='mx-12 text-xl font-bold'>For business</h2>
    <div className="mt-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-10">
 
 <div className="card  w-80   ">
   <img
     className="h-auto max-w-xs mx-auto sm:w-72 "
     src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Surf-CP-SurfaceFamilyForBusiness?wid=380&hei=213&fit=crop"
     alt=""
   />
   <div className="">
     <h4 className="font-bold text-lg">Surface for Business</h4>
     <p>
     No matter what you do, there’s a Surface to help you do it.
     </p>
     <div className="hover:translate-x-1 mx-4 text-2xl flex items-center text-blue-500">
       <span className=" text-lg hover:underline">Shop now</span>
       <span className="">→</span>
     </div>
   </div>
 </div>

 <div className="card  w-80  ">
   <img
     className="h-auto max-w-xs mx-auto sm:w-72"
     src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSX-CP-Xbox-Series-X?wid=380&hei=213&fit=crop"
     alt=""
   />
   <div className="">
     <h4 className="font-bold text-lg">Xbox Series X</h4>
     <p>The fastest, most powerful Xbox ever.</p>

     <div className="hover:translate-x-1 mx-4 text-2xl flex items-center text-blue-500">
       <span className=" text-lg hover:underline">Shop Xbox series X</span>
       <span className="">→</span>
     </div>
   </div>
 </div>

 <div className="card    w-80 ">
   <img
     className="h-auto max-w-xs mx-auto sm:w-72"
     src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSS-CP-Xbox-Series-S-Evergreen?wid=380&hei=213&fit=crop"
     alt=""
   />
   <div className="">
     <h4 className="font-bold text-lg">Xbox Series S</h4>
     <p>Next-gen performance in the smallest Xbox ever.</p>
     <div className="hover:translate-x-1 mx-4 text-2xl flex items-center text-blue-500">
       <span className=" text-lg hover:underline">Shop Xbox series S</span>
       <span className="">→</span>
     </div>
   </div>
 </div>

 <div className="card  w-80 ">
   <img
     className="h-auto  sm:w-72"
     src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Studio-01-CP?wid=380&hei=213&fit=crop"
     alt=""
   />
   <div className="">
     <h4 className="font-bold text-lg" >Surface Laptop 5</h4>
     <p>
       Flex your creative muscle on the most powerful Surface Laptop. Now
       available with Windows 11.
     </p>
     <div className="hover:translate-x-1 mx-4 text-2xl flex items-center text-blue-500">
       <span className=" text-lg hover:underline"> Learn more</span>
       <span className="">→</span>
     </div>
   </div>
 </div>
</div>
<h4 className='mx-12 flex gap-4 items-center mb-10'>Follow Microsoft <b className='text-lg'><FaFacebookF /></b> <b className='text-lg'><FaXTwitter /></b><b className='text-lg'><FaYoutube /></b> </h4> 
<div className='flex justify-end'><button className='bg-gray-500 text-white p-2 hover:bg-gray-700 mx-10 sticky flex items-center gap-2 '> <FaArrowUp />Back To Top</button></div>
   </>
  )
}

export default Business