"use client"

import { useCursor } from '@/context/cursror-context/CursorContext';
import {motion} from 'framer-motion';
import { Play } from 'lucide-react';
import Image from 'next/image';



const HomePage = ()=>{
    const {mouseEnterHandler,mouseLeaveHandler }  = useCursor();

    return(
  <div className="min-h-screen 
  pt-[15vh] lg:pt-0  flex items-center justify-center
   relative overflow-hidden globalSidePadding"
   >
      {/* Navigation */}


      
      {/* Main Content */}
      <div className="  min-h-screen flex items-center h-full w-full max-w-full ">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full min-h-screen ">
          {/* Left Content */}
          <div className="lg:order-1 order-2 space-y-6  lg:pt-0 ">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl  text-gray-800 leading-tight  text-center lg:text-left">
              Natural Beauty<br />Starts Here
            </h1>
            
            <p className="text-gray-600 text-lg max-w-md  text-center lg:text-left ">
              Tailored skincare solutions for a healthy complexion, offering customized care for radiant skin
            </p>

            <div className="flex flex-wrap items-center sm:justify-start justify-center gap-4 pt-4">

              <button 
            //   className="bg-[#F4A896] hover:bg-[#F39982] text-white px-8 py-4 rounded-full text-sm font-medium transition-colors"
            className='btn '
              >
                BOOK AN APPOINTMENT
              </button>
              
              <button className="min-w-[178px]  flex items-center gap-3 bg-white hover:bg-gray-50 px-6 py-4 rounded-full text-gray-700 text-sm font-medium transition-colors shadow-sm">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-[#F4A896]">
                  <Play className="w-4 h-4 text-[#F4A896] fill-[#F4A896]" />
                </div>
                Watch Video
              </button>
              
            </div>
          </div>

          {/* Right Image  Start */}

          <div
           className='lg:block hidden lg:order-2 order-1 max-w-full
            w-full h-full relative  '
           >


    <div className=' w-full h-full ' >
     <img src="/assets/home/img.png"
      alt="Beauty model"
       className="w-full h-full
        object-contain
        object-bottom-left" 
        /> 
     </div>

          </div>



 {/* Right Image  End */}


        </div>
      </div>
      {/* Decorative Elements */}
    </div>
    )
}

export default HomePage;