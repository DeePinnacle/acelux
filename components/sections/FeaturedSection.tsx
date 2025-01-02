"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

import { featuredProducts } from "@/data/data";
import { Button } from "../ui/button";

const FeaturedSection = () => {
  const [displayImage, setDisplayImage] = useState<string>();
  const [dataId, setDataId] = useState<number>();

  // handle image change
  const handleImageChange = (image: string, index: number) => {
    setDisplayImage(image);
    setDataId(index);
  };

  // motion variants
  const animationVariants = {
    initial: {
      y: 300,
      opacity: 0,
    },
    animate: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.05 * index,
        duration: 2,
      },
    }),
  };

  return (
    <section className="gen-container lg:my-24">
      <div className="gen-wrapper">
        <div className="p-2 lg:flex lg:flex-col lg:items-center lg:justify-center ">
          <h1 className="text-3xl font-jost md:text-6xl lg:text-4xl lg:text-center">
            Unbeatable Comfort 👣 Unmatched Style
          </h1>
          <p className="my-3 md:text-3xl md:w-3/4 lg:text-base lg:text-center">
            Explore our best-selling shoes, handpicked just for you.
          </p>
        </div>
        <div className="featured-content">
          {featuredProducts?.map((product, index: number) => (
            <AnimatePresence key={product.id}>
              <motion.div
                variants={animationVariants}
                initial="initial"
                whileInView="animate"
                custom={index}
                exit={{
                  scale: 0,
                }}
                viewport={{
                  once: true,
                }}
                className="w-full px-2 pt-2 pb-8 my-3 rounded-xl overflow-hidden shadow-xl shadow-black/10 flex flex-col"
              >
                {/* image container */}
                <div className="relative w-full h-72 overflow-hidden md:h-[35rem] lg:h-64">
                  (
                  <Image
                    src={`${
                      index === dataId
                        ? `/${displayImage}`
                        : `/${product.images[0]}`
                    }`}
                    data-id={index}
                    alt="images"
                    fill
                    priority
                    objectFit="cover"
                    objectPosition="center"
                  />
                  )
                  <div className="absolute w-11 h-11 bg-[#FFCCCC]/30 rounded-full right-3 top-3 flex flex-col items-center justify-center md:w-16 md:h-16 lg:w-11 lg:h-11">
                    <Heart className="text-red-500 md:w-11 md:h-11 lg:w-7 lg:h-7" />
                  </div>
                  <div className="absolute top-3 left-3 bg-green-300 px-4 py-2 md:py-4 lg:py-2">
                    <p className="text-green-800 font-bold md:text-2xl lg:text-base">
                      {product.price}
                    </p>
                  </div>
                </div>
                {/* image view options starts here */}
                <div className="w-full mt-2 grid grid-cols-2 items-center gap-2">
                  {product.images.map((image, idx) => (
                    <div
                      key={idx}
                      className="relative w-full px-2 bg-slate-100 h-28 md:h-44 lg:h-28"
                    >
                      <Image
                        src={`/${image}`}
                        alt="all-black"
                        fill
                        priority
                        objectFit="cover"
                        objectPosition="center"
                        onClick={() => {
                          handleImageChange(image, index);
                        }}
                      />
                    </div>
                  ))}
                </div>
                {/* image view options ends here */}
                <div className="lg:h-64 lg:flex lg:flex-col lg:justify-between">
                  <p className="my-5 text-xl font-jost font-medium md:text-3xl md:mx-4 lg:text-xl lg:mb-2">
                    {product.productName}
                  </p>
                  <p className="my-4 md:text-2xl md:mx-4 lg:text-sm">
                    {product.description}
                  </p>
                  <Button
                    asChild
                    className="bg-transparent hover:bg-transparent px-4 py-2 my-4 rounded-full text-[#BF6C00] border border-[#BF6C00] md:py-4 md:my-6 md:text-2xl lg:my-2 lg:py-2 lg:text-base lg:w-1/2"
                  >
                    <Link href={"wa.me/2348026043410"}>Shop now &rarr;</Link>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
