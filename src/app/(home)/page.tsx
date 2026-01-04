"use client"

import ModalVideo from '@/components/custom/ModalVideo';
import { useCursor } from '@/context/cursror-context/CursorContext';
import {motion} from 'framer-motion';
import { Play } from 'lucide-react';
import Image from 'next/image';



const HomePage = ()=>{
    const {mouseEnterHandler,mouseLeaveHandler }  = useCursor();

    return(
  <motion.div
      initial={{opacity:0}}
    animate={{
        opacity:1,
        transition:{
            delay:2,
        }
    }}
  className=" min-h-screen lg:h-screen overflow-hidden  
  pt-[25vh] sm:pt-[20vh] lg:pt-[10vh]  flex items-center justify-center
   relative  globalSidePadding"
   >
      {/* Navigation */}


      
      {/* Main Content */}
      <div className="  lg:min-h-screen  flex  lg:items-center h-full w-full max-w-full ">
        <div className="grid lg:grid-cols-2 gap-12 lg:items-center w-full lg:min-h-screen  ">
         
          {/* Left (TEXT) Content START */}

          <motion.div
          initial={{opacity:0,y:-100}}
          animate={{
              opacity:1,y:0,
              transition:{
                  delay:2,
                  duration:1,
                  ease:'easeInOut'
              }
          }}
          
          className=" space-y-6  lg:pt-0 ">
            <motion.h1
              onMouseEnter={mouseEnterHandler}
             onMouseLeave={mouseLeaveHandler}
            
            className="text-5xl lg:text-6xl xl:text-7xl  text-gray-800 leading-tight  text-center lg:text-left">
              Natural Beauty<br />Starts Here
            </motion.h1>
            
            <motion.p 
            onMouseEnter={mouseEnterHandler}
             onMouseLeave={mouseLeaveHandler}

            className="text-gray-600 text-lg
             max-w-md max-lg:mx-auto text-center lg:text-left ">
              Tailored skincare solutions for a healthy complexion, offering customized care for radiant skin
            </motion.p>

            <div className="flex flex-col sm:flex-row  sm:flex-nowrap sm:items-center lg:justify-start sm:justify-center gap-2 pt-4">

              <button 
            //   className="bg-[#F4A896] hover:bg-[#F39982] text-white px-8 py-4 rounded-full text-sm font-medium transition-colors"
            className='btn  '
              >
                BOOK AN APPOINTMENT
              </button>
              
    {/* OPEN THE VIDEO START */}
    <motion.div
    whileHover={{scale:1.05}}
    whileTap={{scale:0.9}}
    className='cursor-pointer '
    onMouseEnter={mouseEnterHandler}
    onMouseLeave={mouseLeaveHandler}
    >
      <ModalVideo/>

    </motion.div>
    {/* OPEN THE VIDEO END */}
              
            </div>
          </motion.div>
          {/* Left (TEXT) Content END */}

          {/* Right Image  Start */}

          <div
           className='order-1 max-w-full
            w-full h-full relative   overflow-hidden  '
           >


    <motion.div
           initial={{opacity:0, y:"100%"}}
          animate={{
              opacity:1,
              y:0,
              transition:{
                  delay:2,
                  duration:1,
                  ease:'easeInOut'
              }
          }}
          
    
    className='lg:w-full lg:h-full  lg:aspect-auto' >
     <img src="/assets/home/img.png"
      alt="Beauty model"
       className="w-full h-full
        object-contain  " 
        loading='eager'
        /> 
     </motion.div>

          </div>



 {/* Right Image  End */}


        </div>
      </div>
      {/* Decorative Elements */}
    </motion.div>
    )
}

export default HomePage;