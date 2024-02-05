import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="bg-[#1B3764]">
      <div className="container ">

    <div className="left">
      <div>
        <div></div>
        <p>Welcome to Pages</p>
      </div>
      <h1>Books are uniquely
portable magic </h1>
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
      <div><button>Order Today
        </button>
        <p>Read Free Demo</p>
        </div>
        <div>
          <div>
            <div></div>
            <div>
            <p>Pages:</p>
            <p>586pages</p>
            </div>
          </div>
          <div>
          <div></div>
          <div>
          <p>Length:</p>
            <p>10 Hours</p>
          </div>
          </div>
          <div>
            <div></div>
            <div>
            <p>Ratings:</p>
            <p>4.5/5 (305 ratings)</p>
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
