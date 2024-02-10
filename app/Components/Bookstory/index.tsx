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
    <div className="container ">
      <h2 className="text-[45px] font-bold text-[#1B3764] text-center">
        Author’s Book Includes
      </h2>
      <div className="flex">
      {book.map(({ id, title, description, pages, length, img }: Book) => {
        return (
          <div className="flex" key={id}>
            <div>
              <Image src={img} alt={title} width={300} height={400} />
            </div>
            <div className="">
              <h2>{title}</h2>
              <p>{description}</p>
              <div>
                <div>
                  <div></div>
                  <p>Pages:</p>
                  <p>{pages}</p>
                </div>
                <div>
                  <div></div>
                  <p>Length:</p>
                  <p>{length}</p>
                </div>
              </div>
              <button className="text-center p-3 border border-[#FFCA42] transition duration-300 text-[#1B3764] ">
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
