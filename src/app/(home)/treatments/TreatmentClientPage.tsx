"use client"
import React from 'react'
import {motion} from 'framer-motion';
import { useCursor } from '@/context/cursror-context/CursorContext';
import Image from 'next/image';
const TreatmentClientPage = () => {

  const {mouseEnterHandler,mouseLeaveHandler} = useCursor();



  return (
      <motion.div
    initial={{opacity:0}}
    animate={{
        opacity:1,
        transition:{
            delay:2,
        }
    }}
    className='min-h-screen lg:h-screen
     pt-[25vh] sm:pt-[20vh] lg:pt-[10vh] max-lg:pb-10
     globalSidePadding
    bg-secondary-default/100
     overflow-hidden flex lg:items-center '
    >

     {/* PARENT START */}
      <div className='flex flex-col  max-lg:gap-4 lg:flex-row lg:items-center lg:justify-between w-full h-full'>

{/*TEXT SECTION START */}
<motion.div
initial={{opacity:0, x:-60}}
animate={{
  opacity:1,x:0,
  transition:{
    delay:2,
    duration:0.8,
    ease:'easeInOut'
  }
}}
onMouseEnter={mouseEnterHandler}
onMouseLeave={mouseLeaveHandler}
className=' flex flex-col items-start 
  w-full text-center lg:text-left xl:mx-auto '
> 

  <h2 
  className="h2 mb-6 mx-auto max-w-[740px] w-full lg:max-w-none capitalize">Indulge in our Luxurious treatment </h2>
  <p className='lead max-w-[600px] mx-auto xl:mx-0 capitalize'>
     Tailored skincare solutions
     for a healthy complexion,
     offering customzed care for radiant skin
     </p>


     {/* ITEMS-PARENT START */}

<div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] lg:gap-[20px] mb-14 mx-auto lg:mx-0">
  {servicesArr.map((item, index) => (
    <div
      key={index}
      className="flex flex-col justify-center items-center xl:items-start"
    >
      <div className="flex items-center gap-3">
        <div
          className="w-[14px] h-[14px] bg-accent-100 rounded-tl-[28px]
          rounded-bl-[28px] rounded-br-[4px] rounded-tr-[4px]"
        />
        <h3 className="text-2xl">{item.title}</h3>
      </div>

      <p className="pl-6 text-sm text-gray-600">
        {item.description}
      </p>
    </div>
  ))}
</div>
     {/* ITEMS-PARENT END */}

     {/* BTN START */}
     <button className='btn mx-auto xl:mx-0'>
      Discover More
      </button>
     {/* BTN START */}

</motion.div>
{/*TEXT SECTION END */}



{/*IMAGE START */}
{/* <div
 className="lg:flex hidden  max-w-[684px]
  w-full h-[534px] lg:h-[584px] relative bg-cyan-500"

  >
  <Image
    src="/assets/treatments/img.jpg" 
    alt="treatment-img"
    loading="lazy"
    fill
    quality={100}
    objectFit='cover'
    className="w-full h-full"

    />

</div> */}

<motion.div
initial={{opacity:0, x:60}}
animate={{
  opacity:1,x:0,
  transition:{
    delay:2.4,
    duration:0.8,
    ease:'easeInOut'
  }
}}
onMouseEnter={mouseEnterHandler}
onMouseLeave={mouseLeaveHandler}



className="
  lg:flex
  relative
  max-w-1/2
  w-full
  mx-auto

   h-[400px] 
  sm:h-[500px]
  md:h-[700px] xl:h-[850px]">
  <Image
    src="/assets/treatments/img.jpg"
    alt="treatment-img"
    fill
    className="object-contain"
    quality={100}
    priority
  />
</motion.div>



{/*IMAGE END */}

      </div>
      {/* PARENT END */}



    </motion.div>
  )
}

export default TreatmentClientPage


const servicesArr = [

  {
    title: "Hydrating Glow Facial",
    description:
      "Deep moisture therapy designed to restore skin balance, improve texture, and leave your skin visibly plump and radiant.",
  },

  {
    title: "Advanced Brightening Treatment",
    description:
      "Targets dullness and uneven tone using gentle exfoliation and vitamin-rich serums for a naturally luminous finish.",
  },

  {
    title: "Acne Control & Detox Facial",
    description:
      "Purifies clogged pores, reduces breakouts, and calms inflammation with antibacterial and soothing ingredients.",
  },

  {
    title: "Anti-Aging Renewal Facial",
    description:
      "Boosts collagen production, smooths fine lines, and firms the skin for a youthful, refreshed appearance.",
  },

];
