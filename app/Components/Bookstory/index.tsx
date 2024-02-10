import Image from "next/image";
import React from "react";
const url = "http://localhost:5793/bookstory";
async function getBook() {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
interface Book {
  id: number;
  title: string;
  description: string;
  pages: string;
  length: string;
  img: string;
}

export default async function Bookstory() {
  const book = await getBook();
  return (
    <div className="container my-10">
      <h2 className="text-[45px] my-10 font-bold text-[#1B3764] text-center">
        Author’s Book Includes
      </h2>
      <div className="grid  grid-cols-1 md:grid-cols-2 ">
        {book.map(({ id, title, description, pages, length, img }: Book) => {
          return (
            <div className="flex gap-4" key={id}>
              <div className="">
                <Image src={img} alt={title} width={400} height={500} />
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-[32px] text-[#1B3764] font-bold">
                  {title}
                </h2>
                <p className="text-[19px] text-[#969AA0]">{description}</p>
                <div className="grid grid-cols-2">
                  <div className="flex ">
                    <div className="w-[16px] h-[16px] rounded-full m-3 bg-[#FFCA42]"></div>
                    <div>
                      <p className="text-[24px] text-[#1B3764] font-bold">
                        Pages:
                      </p>
                      <p className="text-[18px] text-[#969AA0]"> {pages}</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-[16px] h-[16px] rounded-full m-3 bg-[#FFCA42]"></div>
                    <div>
                      <p className="text-[24px] text-[#1B3764] font-bold">
                        Length:
                      </p>
                      <p className="text-[18px] text-[#969AA0]">{length}</p>
                    </div>
                  </div>
                </div>
                <button className="w-[200px] text-center p-3 border border-[#FFCA42] transition duration-300 text-[#1B3764] ">
                  Order Today
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
