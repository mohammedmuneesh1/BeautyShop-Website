"use client"

import React from 'react'
import {AnimatePresence,animate,motion} from 'framer-motion'
import { usePathname } from 'next/navigation';




const animation = {
    initial:{
        top:'0%',
        //IN CLASSNAME WE USED H-SCREEN SO BOTTOM 0 
// At top: 0%: ,Your overlay fully covers the screen

    },
    animate:{
        top:'-100%',
// What about top: -100%?
// This means:
// Move the element upward by its own height
// The entire overlay goes above the viewport
// Still exists, just invisible
    },
    exit:{   // TRIGGER ONLY WHEN WE CHANGE TO ANOTHER ROUTE 
        top:["100%","0%"]
        //BOTTOM → UP → FULL COVER
        //from 100% (bottom) to top 0%
    }
}

const Transition = () => {
    const pathname = usePathname();
  return (
   <>
   <AnimatePresence mode='wait'>
    {/* This means:
Exit animation finishes
THEN enter animation starts */}
    <div
     key={pathname}
    //   This is the key trick.
// pathname changes,
//  React sees a new key,
//  Old component unmounts, New one mounts
// Framer Motion sees this and goes:
// “Ah, unmounting? Time for exit animation.”

     >
        <div className='hidden xl:flex xl:h-screen  
        xl:w-screen fixed top-0 left-0  right-0 pointer-events-none z-9999'>
{/* pointer-events-none
This prevents:
Blocking clicks
Blocking scroll
Random bugs during animation
Without it:
Your overlay becomes an invisible wall.
Users rage. You debug for hours. You regret life choices. */}

            <motion.div
             variants={animation}
             initial={"initial"}
             animate="animate"
             exit={"exit"}
             transition={{
                 duration:0.6,
                 ease:'easeInOut',
                 delay:0.2,
             }}
             className='w-full h-full
              bg-[#e2cfbd] 
              relative'

             />
        </div>

    </div>

   </AnimatePresence>
   </>
  )
}

export default Transition