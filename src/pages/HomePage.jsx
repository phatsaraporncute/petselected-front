import { Link } from "react-router-dom";

import homeBanner1 from "../assets/homepage-banner-1.jpg";
import homeBanner2 from "../assets/homepage-banner-2.jpg";
import homeBanner3 from "../assets/homepage-banner-3.png";
import all from "../assets/All.png";
import clean from "../assets/Clean.jpeg";
import feed from "../assets/Feed.jpeg";
import drink from "../assets/Drink.jpeg";
import fun from "../assets/Fun.jpeg";
import accessories from "../assets/Accessories.jpeg";

export default function HomePage() {
  return (
    <div>
      {/* preview */}
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full relative">
          <div className="absolute bottom-24 left-24">
            <h1 className="text-black text-6xl font-semibold">
              TECHNOLOGY PRODUCTS
            </h1>
            <p className="text-black text-lg mt-2 font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Link to="/product">
              <button className="btn btn-active mt-10 rounded-full text-white">
                shop now
              </button>
            </Link>
          </div>
          <img src={homeBanner3} className="w-full" />
        </div>

        <div id="item2" className="carousel-item w-full relative">
          <div className="absolute bottom-24 left-24">
            <h1 className="text-black text-6xl font-semibold">
              TECHNOLOGY PRODUCTS
            </h1>
            <p className="text-black text-lg mt-2  font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Link to="/product">
              <button className="btn btn-active mt-10 rounded-full text-white">
                shop now
              </button>
            </Link>
          </div>
          <img src={homeBanner1} className="w-full" />
        </div>

        <div id="item3" className="carousel-item w-full relative">
          <div className="absolute bottom-24 left-24">
            <h1 className="text-black text-6xl font-semibold">
              TECHNOLOGY PRODUCTS
            </h1>
            <p className="text-black text-lg mt-2 font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Link to="/product">
              <button className="btn btn-active mt-10 rounded-full text-white">
                shop now
              </button>
            </Link>
          </div>
          <img src={homeBanner2} className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>

      {/* Collection list */}
      <div className="max-w-[78rem] mx-auto flex flex-col mb-8">
        <h1 className="text-4xl font-semibold text-graynav mt-11">
          Collection List
        </h1>
        <div className="flex justify-center items-center mt-12">
          <div className="grid grid-flow-row grid-cols-3 gap-11 max-w-screen-xl">
            <Link to="/shop" className="w-96 text-graynav border-none">
              <div className="bg-white flex flex-col justify-center items-center text-center rounded-t-xl p-5">
                <h1 className="text-3xl font-medium rounded-b-xl pt-4">All</h1>
                <p className="w-60 pt-2 text-xs font-light">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <img src={all} className="rounded-b-xl" />
            </Link>
            <Link to="/shop" className="w-96 text-graynav border-none">
              <div className="bg-white flex flex-col justify-center items-center text-center rounded-t-xl p-5">
                <h1 className="text-3xl font-medium rounded-b-xl pt-4">
                  Clean
                </h1>
                <p className="w-60 pt-2 text-xs font-light">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <img src={clean} className="rounded-b-xl w-96 h-96 object-none" />
            </Link>
            <Link to="/shop" className="w-96 text-graynav border-none">
              <div className="bg-white flex flex-col justify-center items-center text-center rounded-t-xl p-5">
                <h1 className="text-3xl font-medium rounded-b-xl pt-4">Feed</h1>
                <p className="w-60 pt-2 text-xs font-light">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <img src={feed} className="rounded-b-xl" />
            </Link>
            <Link to="/shop" className="w-96 text-graynav border-none">
              <div className="bg-white flex flex-col justify-center items-center text-center rounded-t-xl p-5">
                <h1 className="text-3xl font-medium rounded-b-xl pt-4">
                  Drink
                </h1>
                <p className="w-60 pt-2 text-xs font-light">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <img src={drink} className="rounded-b-xl" />
            </Link>
            <Link to="/shop" className="w-96 text-graynav border-none">
              <div className="bg-white flex flex-col justify-center items-center text-center rounded-t-xl p-5">
                <h1 className="text-3xl font-medium rounded-b-xl pt-4">Fun</h1>
                <p className="w-60 pt-2 text-xs font-light">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <img src={fun} className="rounded-b-xl  h-96 w-96 " />
            </Link>
            <Link to="/shop" className="w-96 text-graynav border-none">
              <div className="bg-white flex flex-col justify-center items-center text-center rounded-t-xl p-5">
                <h1 className="text-3xl font-medium rounded-b-xl pt-4">
                  Accessories
                </h1>
                <p className="w-60 pt-2 text-xs font-light">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <img src={accessories} className="rounded-b-xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
