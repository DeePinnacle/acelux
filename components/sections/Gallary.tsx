"use client";

import { InfiniteMovingCards } from "../ui/moving-cards";

const sliderImage = [
  {
    image: "all-black.jpg",
  },
  {
    image: "black-brown1.jpg",
  },
  {
    image: "brown-sandal.jpg",
  },
  {
    image: "pic.jpeg",
  },
  {
    image: "lady1.jpg",
  },
  {
    image: "lady2.jpg",
  },
  {
    image: "slide1.jpeg",
  },
  {
    image: "slide2.jpeg",
  },
  {
    image: "flipflop1.jpg",
  },
  {
    image: "flipflop2.jpg",
  },
  {
    image: "female-shoe.png",
  },
];
export function InfiniteMovingCardsGallery() {
  return (
    <section className="gen-container">
      <div className="gen-wrapper">
        <div className="lg:flex lg:flex-col lg:items-center lg:justify-center">
          <h1 className="text-5xl font-jost md:text-7xl lg:text-5xl ">
            Unleash Your Perfect Pair ✨
          </h1>
          <p className="my-2 md:text-2xl lg:text-base lg:w-1/2 text-center">
            From casual to chic, explore our stunning range of shoes designed to
            elevate your every step.
          </p>
        </div>
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-slate-50  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={sliderImage}
            direction="left"
            speed="normal"
          />
        </div>
      </div>
    </section>
  );
}
