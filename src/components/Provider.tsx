'use client'

import { ReactNode } from "react"
import { Toaster } from "react-hot-toast"

interface ProviderProps{
    children:ReactNode
}

export default function Provider({children}:ProviderProps ){
    return(
        <>
            <Toaster position="top-center" reverseOrder={false}/>
            {children}
        </>
    )
}