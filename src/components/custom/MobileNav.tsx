"use client"



import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import {motion} from 'framer-motion';
import { usePathname } from 'next/navigation';
import { links } from './Nav';
import Link from 'next/link';
import Socials from './Socials';



interface MobileNavInterface{
    // setMobileNav:React.Dispatch<React.SetStateAction<boolean>>;
    closeFn:()=>void;
}
const MobileNav:React.FC<MobileNavInterface> = ({closeFn}) => {
   const pathName = usePathname();

    return (
    <nav
     className='text-white w-full 
     h-full
     flex flex-col justify-between p-8'
     >
<IoCloseOutline
onClick={closeFn}
className='cursor-pointer text-3xl text-accent-default'
/>


<ul className='flex flex-col items-center gap-10 text-white text-xl w-full max-w-full'>

    {links?.map((link,index)=>(
        <Link 
        href={link?.href}
        onClick={closeFn}
        key={index}
        className={`${pathName === link?.href && "border-b-2 border-accent-default" }`}
        >
            {link?.name}

        </Link>
    ))}
</ul>


{/*SOCIAL ACCOUNT START */}
<div className='text-white'>


<Socials
 containerStyle='text-white text-lg flex gap-6 justify-center'
/>

</div>
{/*SOCIAL ACCOUNT END */}




    </nav>
  )
}

export default MobileNav