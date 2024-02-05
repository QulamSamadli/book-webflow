import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="bg-[#1B3764] py-12 ">
      <div className="container  grid grid-cols-2 gap-12 ">

    <div className="left grid">
      <div className="flex items-center gap-2">
        <div className="border-t border-[#FFCA42] w-[34px]"> </div>
        <p className="text-white text-[24px] font-normal italic  ">Welcome to Pages</p>
      </div>
      <h1 className="text-[65px] font-bold text-white">Books are uniquely
portable magic </h1>
      <p className="text-[#B4C7E7] text-[19px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
      <div className="flex items-center gap-4"> <Link href="/order"><button className='bg-[#FFCA42] text-center p-3 hover:bg-white hover:text-[#FFCA42] transition duration-300 text-[#1B3764] '>Order Today</button></Link>
        <p className="underline underline-offset-4  text-[19px] text-white font-bold">Read Free Demo</p>
        
        </div>
        <div className="grid grid-cols-3 ">
          <div className="flex ">
            <div className="w-[16px] h-[16px] m-2 rounded-full bg-[#FFCA42]"></div>
            <div >
            <p className="text-[24px] font-bold text-white ">Pages:</p>
            <p className="text-[18px] text-[#B4C7E7] ">586pages</p>
            </div>
          </div>
          <div className="flex ">
          <div className="w-[16px] h-[16px] m-2 rounded-full bg-[#FFCA42]"></div>
          <div >
          <p className="text-[24px] font-bold text-white ">Length:</p>
            <p className="text-[18px] text-[#B4C7E7] ">10 Hours</p>
          </div>
          </div>
          <div className="flex ">
            <div className="w-[16px] h-[16px] m-2 rounded-full bg-[#FFCA42]"></div>
            <div >
            <p className="text-[24px] font-bold text-white ">Ratings:</p>
            <p className="text-[18px] text-[#B4C7E7] ">4.5/5 (305 ratings)</p>
            </div>
          </div>
        </div>
    </div>
    <div className="right"><Image
    src="/Book.png"
    alt="Book"
    width={592}
    height={800}
    /></div>

      </div>
    </div>
  );
};

export default Home;
