import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" w-full min-h-screen flex flex-col justify-center items-center px-24 mobile:px-5 mt-[95.6px] py-10 ">
          <h1 className=" hidden mobile:block font-bold text-3xl float-left w-full mobile:text-[7vw] mb-8 text-slate-600">Start Shopping Now</h1>
      <div className=" flex justify-center items-center gap-2 mobile:flex-col-reverse ">
        <div className=" w-[130%] mobile:w-full">
        <h1 className=" block mobile:hidden font-bold text-3xl float-left w-full mobile:text-[7vw] mb-2 text-slate-600">Start Shopping Now</h1>
          <p className=" font-sans font-semibold text-justify">
            Welcome to <i className=" text-xl font-semibold text-orange-500 hover:underline-offset-1">The Inertia Group</i>, where shopping meets
            convenience! Explore our vast collection of high-quality products,
            from fashion to electronics. Unearth unbeatable deals, enjoy
            personalized recommendations, and let our friendly customer support
            team assist you. Join our online shopping community today for a
            seamless retail experience!
          </p>
          <Link href={'/products'} className=" bg-orange-400 py-3 px-5 shadow-sm text-white hover:bg-transparent hover:text-orange-400 border border-orange-400 font-semibold mt-5" type="button">Start Purchasing</Link>
        </div>
        <div className=" w-full mobile:w-full">
          <embed src={"/home.svg"} />
        </div>
      </div>
    </main>
  );
}
