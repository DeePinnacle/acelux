"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
const CTA = () => {
  const animationVariants = {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };
  return (
    <section className="gen-container">
      <div className="gen-wrapper">
        <motion.div
          variants={animationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="w-full bg-[#312B2B] px-2 py-10 rounded-lg lg:flex lg:flex-row lg:gap-4 lg:px-6"
        >
          <div className="lg:w-2/3">
            <h2 className="text-7xl font-jost my-3 text-acetext lg:text-6xl">
              Your Next Step Starts with Ace Lux
            </h2>
            <p className="text-slate-300 md:text-2xl lg:text-base">
              Elevate your style and experience unmatched comfort with Ace Lux.
              Don&pos;t miss out on our latest collections crafted just for you
            </p>
            <div className="my-8 flex flex-row items-center gap-6">
              <Button
                asChild
                className="bg-transparent h-14 text-acetext text-lg border border-solid border-[#BF6C00] hover:bg-transparent md:h-16 md:text-2xl lg:text-base lg:h-11"
              >
                <Link href={"wa.me/2348026043410"}>Shop our collection</Link>
              </Button>
              <Button className="bg-transparent h-14 text-acetext text-lg border border-solid border-[#BF6C00] hover:bg-transparent md:h-16 md:text-2xl lg:text-base lg:h-11">
                Learn more
              </Button>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2 lg:w-full">
            <div className="relative w-full h-60 overflow-hidden rounded-md h">
              <Image
                src={"/flipflop2.jpg"}
                alt="flip-flop shoe image"
                fill
                priority
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="w-full h-96 grid grid-rows-2 gap-2">
              <div className="relative w-full h-full overflow-hidden rounded-md">
                <Image
                  src={"/all-black.jpg"}
                  alt="flip-flop shoe image"
                  fill
                  priority
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="relative w-full h-full overflow-hidden rounded-md">
                <Image
                  src={"/brown-sandal.jpg"}
                  alt="flip-flop shoe image"
                  fill
                  priority
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
