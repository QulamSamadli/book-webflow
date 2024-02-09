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
interface Props {
    books: Book[]; 
  }

export default async function Bookstory:React.FC<Props>() {
  const book = await getBook();
  return (
    <div className="container">
      <h2>Author’s Book Includes</h2>
      {book.map(({ id, title, description, pages, length, img }) => {
        return (
          <div key={id}>
            <Image src={img} alt="" width={300} height={400} />
            <div>
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
                  <p>Length</p>
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
  );
}
