'use client'

import MyModal from "@/components/MyModal"
import { Product } from "@/type/Prodcut"
import Image from "next/image"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { TbStar, TbStarFilled, TbStarHalfFilled } from "react-icons/tb"

interface pageProps{
    params:{
        id:[string]
    }
}

export default function Page({params}:pageProps){
    const id= params.id[0]
    const [product,setProduct]=useState<Product[]>([])
    const [halfsStar,setHalfStar]=useState<number>(0)
    const [stars,setStars]=useState<number>(0)
    const [quantity,setQuantity]=useState<number>(0)
    const[customerId,setCustomerId]=useState<number>(1)
    const[isOpen,setIsOpen]=useState<boolean>(false)

    async function sendData() {
        const response = await (
          await fetch("/api/purchase", {
            method: "POST",
            body: JSON.stringify({
              product_id: product[0]?.id,
              customer_id: customerId,
              quantity: quantity,
            }),
          })
        ).json();
        if(response){
            toast.success('Your order is placed!')
        }else{
            toast.error('Somthing went wrong please try again.')
        }
      }
    
    useEffect(()=>{
        const fetchData=async()=>{
            const response=await (await fetch(`/api/products/${id}`)).json()
            console.log(response)
            setProduct(response)
            setHalfStar(response[0]?.rating?.rate%10 !=0 ? 1: 0)
            setStars(Math.floor(response[0]?.rating?.rate))
        }
        fetchData()
    },[])
    return(
        <>
            <div className=' px-24 mobile:px-5 min-h-screen flex flex-col mt-[96.5px] py-10 items-center'>
                <h1 className=" font-semibold text-lg text-center mb-2">{product[0]?.title}</h1>
                <div className="p-4 w-full flex justify-center items-center bg-gray-200 rounded shadow-sm">
                    <Image className=" object-fill " width={200} height={150} src={product[0]?.image} alt="not found"/>
                </div>
                <div className=" flex justify-center items-center gap-2 bg-gray-100 rounded shadow-sm p-3 border my-3">
                <div className=" flex ">
                        {
                        Array(stars).fill(0).map((val,ind)=>{
                            return(
                                <span key={ind}><TbStarFilled className='text-yellow-400 text-sm' /></span>
                            )
                        })
                        }
                        {halfsStar && <span> <TbStarHalfFilled className='text-yellow-400 text-sm' /> </span>}
                        { 
                        Array(5-stars-halfsStar).fill(0).map((val,ind)=>{
                            return(
                                <span key={ind}><TbStar className='text-yellow-400 text-sm' /></span>
                            )
                        })
                        }
                </div>
                        <p className="text-sm">
                        {new Intl.NumberFormat('en-IN').format(product[0]?.rating?.count+1000)}
                        </p>
                </div>
                    <div className=" flex justify-center items-center gap-1 my-3">
                        <p>$</p>
                        <p className=" font-semibold text-xl">
                            {product[0]?.price}
                        </p>
                    </div>
                <div>
                    <p className=" mb-2 p-2 px-4 text-white bg-blue-300 rounded shadow-sm w-fit">{product[0]?.category?.toUpperCase()}</p>
                    <p className=" text-justify">{product[0]?.description}</p>
                </div>
                    <button onClick={()=>setIsOpen(true)} type='button' className=" bg-orange-400 py-3 px-5 shadow-sm text-white hover:bg-transparent hover:text-orange-400 border border-orange-400 font-semibold mt-5">BUY NOW</button>  
                </div>

                <MyModal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
                <>
                <ul className=" flex flex-col justify-center gap-3">
                    <li className=" flex flex-col">
                    <label>Customer Id</label>
                    <input readOnly value={1}
                        onChange={(e) => setCustomerId(e.target.valueAsNumber)}
                        className=" p-2 px-4 rounded shadow-sm border border-gray-200"
                        type="number"
                        placeholder="Customer Id"
                    />
                    </li>
                    <li className=" flex flex-col">
                    <label>Product Id</label>
                    <input
                        value={product[0]?.id}
                        className=" p-2 px-4 rounded shadow-sm border border-gray-200"
                        type="number"
                        readOnly
                        placeholder="Product Id"
                    />
                    </li>
                    <li className=" flex flex-col ">
                    <label>Quantity</label>
                    <input
                        onChange={(e) => setQuantity(e.target.valueAsNumber)}
                        className=" p-2 px-4 rounded shadow-sm border border-gray-200"
                        type="number"
                        placeholder="Quantity"
                    />
                    </li>
                </ul>
                <div className=" flex items-center gap-3 my-2">
                    <button
                    onClick={() => setIsOpen(false)}
                    className=" py-2 px-4 bg-slate-500 text-white border border-slate-500 hover:bg-transparent hover:text-black "
                    >
                    CANCEL
                    </button>
                    <button
                    onClick={()=>{
                        sendData()
                        setIsOpen(false)
                    }}
                    className=" py-2 px-4 text-white bg-orange-400 border border-orange-400 hover:text-orange-400 hover:bg-transparent font-semibold"
                    >
                    BUY
                    </button>
                </div>
                </>
            </MyModal>
        </>
    )
}