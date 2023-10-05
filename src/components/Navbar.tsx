'use client'
import Link from "next/link";
import { useState } from "react";
import {TbList,TbX} from 'react-icons/tb'

interface NavbarProps{
    
}

export default function Navbar({}:NavbarProps ){
    const [showNavbar,setShowNavbar]=useState<Boolean>(false)
    return(
        <>
            <nav className=' z-10 mobile:hidden block fixed top-0 w-full bg-[#ffffff] px-16 py-6 shadow-lg border'>
                <div className=" flex justify-center items-center gap-2">
                    <Link className=" font-semibold text-lg p-2 hover-underline" href={'/'}>Home</Link>
                    <Link className=" font-semibold text-lg p-2 hover-underline" href={'/products'}>Products</Link>
                    <Link className=" font-semibold text-lg p-2 hover-underline" href={'/purchase'}>Purchase</Link>
                    <Link className=" font-semibold text-lg p-2 hover-underline" href={'/about'}>About</Link>
                </div>
            </nav>
            <nav className=' z-10 mobile:block hidden fixed top-0 w-full bg-[#ffffff] px-5 py-6 shadow-lg border'>
                <button type="button" onClick={()=>setShowNavbar(!showNavbar)}>
                    {showNavbar ?<TbX size={30}/> : <TbList size={30} /> }
                </button>
                {showNavbar && 
                <div className=" p-2 rounded shadow-lg flex flex-col justify-center items-center gap-2">
                    <Link href={'/'}  className="w-full text-center py-1">Home</Link>
                    <Link href={'/products'} className="w-full text-center py-1">Products</Link>
                    <Link href={'/purchase'} className="w-full text-center py-1">Purchase</Link>
                    <Link href={'/about'} className="w-full text-center py-1">About</Link>
                </div>}
            </nav>
        </>
    )
}