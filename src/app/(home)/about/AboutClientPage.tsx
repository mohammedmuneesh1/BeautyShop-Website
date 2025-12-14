
"use client"


import React from 'react'
import {motion} from 'framer-motion'
const AboutClientPage = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{
        opacity:1,
        transition:{
            delay:2,
        }
    }}
    className='min-h-screen bg-secondary-default/100
     overflow-hidden flex items-center '
    >
        AboutClientPage
        </motion.div>
  )
}

export default AboutClientPage