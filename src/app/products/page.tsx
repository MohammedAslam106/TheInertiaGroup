"use client";

import { Product } from "@/type/Prodcut";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TbStar, TbStarHalfFilled, TbStarFilled } from "react-icons/tb";
import MyModal from "../../components/MyModal";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast/headless";

interface pageProps {}

export default function Page({}: pageProps) {
  const router = useRouter();
  const [products, setProducts] = useState<Array<Product>>([]);
  const [onSearchChange, setOnsearchChange] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [customerId, setCustomerId] = useState<number>(1);
  const [quantity, setQuantity] = useState<number>(0);

  const [product, setProduct] = useState<Product>({
    id: 0,
    title: "",
    category: "",
    description: "",
    image: "",
    price: 0,
    rating: { rate: 0, count: 0 },
  });

  async function sendData() {
    const response = await (
      await fetch("/api/purchase", {
        method: "POST",
        body: JSON.stringify({
          product_id: product.id,
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

  useEffect(() => {
    async function fetchProducts() {
      const response = await (await fetch("/api/products")).json();
      console.log(response);
      setProducts(
        response.filter((product: Product) => {
          return product.title
            .toLowerCase()
            .includes(onSearchChange.toLowerCase());
        })
      );
    }
    fetchProducts();
  }, [onSearchChange]);
  return (
    <>
      <div className="  min-h-screen flex flex-col justify-center items-center mt-[96.5px] py-5">
        <input
          onChange={(e) => {
            setOnsearchChange(e.target.value);
          }}
          type="text"
          placeholder="Search Products"
          className=" absolute top-28 border border-slate-500 focus:rign-1 focus:ring-gray-300 w-[75%] py-2 px-4 rounded shadow-sm "
        />
        <div className=" flex flex-wrap justify-center items-center gap-10 mt-20 ">
          {products.map((product: Product, ind) => {
            const stars = product.rating.rate % 10 != 0 ? 1 : 0;
            return (
              <div
                onClick={(e) => {
                    e.preventDefault()
                    router.push(`/products/${product.id}?name=${product.title.replaceAll(" ","_")}`);
                }}
                key={ind}
                className=" cursor-pointer w-80 flex flex-col justify-center items-center border border-gray-300 "
              >
                <Image
                  className=" object-fill w-56 h-56 p-2"
                  width={300}
                  height={10}
                  src={product.image}
                  alt="not found"
                />
                <div className=" bg-white w-full overflow-hidden p-4 border-t border-t-gray-300 ">
                  <p className="truncate text-">{product.title}</p>
                  <div className=" flex items-center justify-start gap-2">
                    <div className=" flex">
                      {Array(Math.floor(product.rating.rate))
                        .fill(0)
                        .map((val, ind) => {
                          return (
                            <span key={ind}>
                              <TbStarFilled className="text-yellow-400 text-sm" />
                            </span>
                          );
                        })}
                      {stars && (
                        <span>
                          {" "}
                          <TbStarHalfFilled className="text-yellow-400 text-sm" />{" "}
                        </span>
                      )}
                      {Array(5 - Math.floor(product.rating.rate) - stars)
                        .fill(0)
                        .map((val, ind) => {
                          return (
                            <span key={ind}>
                              <TbStar className="text-yellow-400 text-sm" />
                            </span>
                          );
                        })}
                    </div>
                    <p className="text-sm">
                      {new Intl.NumberFormat("en-IN").format(
                        product.rating.count + 1000
                      )}
                    </p>
                  </div>
                  <p>
                    <span className=" text-sm">$</span>
                    <span className=" text-xl font-[500]">
                      {new Intl.NumberFormat("en-US").format(product.price)}
                    </span>
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setProduct(product);
                      setIsOpen(true);
                    }}
                    type="button"
                    className="w-full bg-orange-400 py-3 px-5 shadow-sm text-white hover:bg-transparent hover:text-orange-400 border border-orange-400 font-semibold mt-5"
                  >
                    BUY NOW
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <MyModal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
        <>
          <ul className=" flex flex-col justify-center gap-3">
            <li className=" flex flex-col">
              <label>Customer Id</label>
              <input value={1} readOnly
                onChange={(e) => setCustomerId(e.target.valueAsNumber)}
                className=" p-2 px-4 rounded shadow-sm border border-gray-200"
                type="number"
                placeholder="Customer Id"
              />
            </li>
            <li className=" flex flex-col">
              <label>Product Id</label>
              <input
                value={product?.id}
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
  );
}
