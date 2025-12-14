import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'



const Nav = () => {
    const pathName = usePathname();
  return (
    <div className='max-w-full w-full flex gap-8 items-center '>
        {
            links?.map((link,index)=>( 
                <Link
                href={link?.href}
                key={index}
                className={`${pathName === link?.href && "border-b-2 border-accent-default" }`}

                >
                    {link?.name ?? ""}
                </Link>
            ))
        }

    </div>
  )
}

export default Nav





export const links = [
    {
        href:'/',
        name:'Home',
    },
    {
        href:'/about',
        name:'About',
    },
    {
        href:'/treatments',
        name:'Treatments',
    },
    {
        href:'/contact',
        name:'Contact',
    },
]