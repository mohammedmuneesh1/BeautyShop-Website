"use client"
import React from 'react'
import CountUp from 'react-countup';


interface StatsItemInterface{

    countNum:number;
    countText?:string;
    text?:string;


    
}

const StatsItem :React.FC<StatsItemInterface>= ({countNum,countText,text}) => {
  return (
    <div className='text-center font-family-primary'>

        <div className='text-[32px] sm:text-[34px] md:text-[36px] lg:text-[40px] text-accent-default mb-4 font-medium'>
            <CountUp 
            end={countNum}
             delay={2.4}
              duration={6} />
              <span className=''>{countText ?? ""}</span>
        </div>
        <p className="tracking-tighter text-sm sm:text-base">{text ?? ""}</p>
    </div>
  )
}

export default StatsItem