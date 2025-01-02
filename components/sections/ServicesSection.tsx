"use client";
import React from "react";
import { services } from "@/data/data";
import { motion } from "framer-motion";
const ServicesSection = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 200,
    },
    animate: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * idx,
        duration: 2,
      },
    }),
  };
  return (
    <section className="service-container" id="services">
      <div className="service-wrapper">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="font-jost text-5xl my-3 md:text-7xl lg:text-5xl lg:mx-12 text-center">
            Our Services
          </h1>
          <p className="md:text-2xl lg:text-base lg:w-3/4 lg:mx-12 text-center">
            At Acelux, we offer more than just shoes – we provide a personalized
            experience. From custom designs to expert care, our services are
            tailored to meet your needs with a focus on quality and customer
            satisfaction.
          </p>
        </div>
        <div className="my-8 py-8 lg:grid lg:grid-cols-3 lg:gap-3">
          {services?.map((service, idx) => (
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={idx}
              className="my-3 flex flex-row gap-2 p-2"
              key={service.id}
            >
              {
                <service.icon
                  className="w-36 animate-spin md:w-72"
                  color={`${
                    service.id === 1
                      ? "#6b21a8"
                      : service.id === 2
                      ? "#4682B4"
                      : service.id === 3
                      ? "#dc2626 "
                      : service.id === 4
                      ? "#8B4513"
                      : service.id === 5
                      ? "#1D9BF0"
                      : "green"
                  }`}
                />
              }
              <span className="">
                <p className="font-semibold text-xl mb-2 md:text-3xl lg:text-xl">
                  {service.header}
                </p>
                <p className="text-slate-600 md:text-2xl lg:text-base">
                  {service.content}
                </p>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
