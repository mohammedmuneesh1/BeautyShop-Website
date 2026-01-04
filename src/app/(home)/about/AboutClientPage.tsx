
"use client"


import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import StatsItem from '@/components/custom/StatsItem'
import { useCursor } from '@/context/cursror-context/CursorContext'
const AboutClientPage = () => {

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
    className='min-h-screen
    pt-[25vh] sm:pt-[20vh] lg:pt-[10vh]
    bg-secondary-default/100
     overflow-hidden flex items-center globalSidePadding'
    >
      <div
       className='flex lg:flex-row flex-col  lg:items-center 
       md:gap-8 xl:gap-20 h-full  w-full'
       >

        {/*IMAGE START  */}
        <motion.div
            onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        initial={{
          opacity:0,
          x:-60 
        }}
        animate={{
          opacity:1,
          x:0,
          transition:{
            delay:2,
            duration:0.8,
            ease:'easeInOut'
          }
        }}
        //  className='relative aspect-[16/13]  bg-blue-400
         className='h-full 
         w-[30%]  max-lg:w-full max-lg:mx-auto
         shrink-0 
            max-md:mb-8'
           >
      <div
  className="
    relative shrink-0
    h-[454px]
    md:max-w-[494px]
    lg:mx-0
    mx-auto
    lg:max-w-[484px]
    lg:h-[384px]
    xl:h-[534px]
  "
>
          <Image 
          src="/assets/about/img.jpg" 
          alt="about-section-img"
          fill 
          objectFit=""
          quality={100}
          loading='lazy'
          className='w-full h-full'
          />
            </div>

        </motion.div>
        {/*IMAGE END  */}

        {/*TEXT SECTION START  */}
        <motion.div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        initial={{opacity:0,x:60}}
        animate={{
          opacity:1,
          x:0,
          transition:{
            delay:2.4,
            duration:0.8, 
            ease:'easeInOut'
          }
        }}
        

        className="
         max-w-ful mr-auto h-full  overflow-hidden max-md:mb-14 ">
        <div
        className=' flex flex-col items-start text-center md:text-left '>
      <h2 className="capitalize max-md:mx-auto max-w-[540px] md:max-w-none mb-6 max-lg:text-center">Commited to your skin&apos;s health and beauty</h2>
      <p className="capitalize lead lg:max-w-[600px] max-lg:text-center  mb-6  ">Tailored skincare solutions for a healthy complexion,
         offering customized care for radiant skin </p>



      {/*ITEMS START  */}
      <div className="grid grid-cols-3 md:gap-[15px] xl:gap-[30px] mx-auto xl:mx-0 mb-14 w-full max-w-full ">
        <div>
          <StatsItem
           countNum={13}
            text="Years of Market"

            
            />
          
          </div>
        <div><StatsItem
        countNum={35}
            text="Happy Clients"
            countText='k+'
            
        /></div>
        <div>
          <StatsItem
           countNum={97}
            text="Natural Ingredients"
            countText='%'
        />
        </div>
        

      </div>
      {/*ITEMS END */}


      {/*BTN START */}
      <button className='btn mx-auto lg:mx-0'>
      contact Not 
      </button>
      {/*BTN END */}



        </div>

        </motion.div>
        {/*TEXT SECTION END  */}



      </div>
        </motion.div>
  )
}

export default AboutClientPage