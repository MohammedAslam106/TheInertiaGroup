'use client'

import { Purchase } from "@/type/Purchase"
import { useEffect, useState } from "react"

interface pageProps{
    
}

export default function Page({}:pageProps ){
    const[purchase,setPurchase]=useState<Purchase[]>([])
    useEffect(()=>{
        const fetchData=async()=>{
            const response=await (await fetch(`/api/purchase/1`)).json()
            console.log(response)
            if(response.length) setPurchase(response)
        }
        fetchData()
    },[])
    return(
        <div className=' flex flex-col justify-center items-center px-24 mobile:px-10 min-h-screen mt-[96.5px]'>
            <table className=" w-full">
                <thead>
                    <tr className=" p-4 flex justify-center gap-5 bg-teal-300 rounded shadow-sm border border-slate-500">
                        <th className=" w-full">Customer Id</th>
                        <th className=" w-full">Purchase Id</th>
                        <th className=" w-full">Product Id</th>
                        <th className=" w-full">Quantity</th>
                    </tr>
                </thead>
                {purchase?.map((pur,ind)=>{
                    return(
                        <tbody key={ind}>
                            <tr className=" p-4 flex justify-center gap-2 bg-slate-300 rounded shadow-sm border">
                                <td className=" w-full text-center">{pur.customer_id}</td>
                                <td className="w-full text-center ">{pur.purchase_id}</td>
                                <td className="w-full text-center ">{pur.product_id}</td>
                                <td className=" w-full text-center">{pur.quantity}</td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    )
}