import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"
const Footer = () => {
  return (
    <section className="w-full bg-[#050505e3] px-2 py-11 lg:px-6" id="footer">
      {/* newsletter starts here */}
      <div className="w-full lg:flex lg:flex-row lg:gap-4">
        <div className="relative w-full h-96 rounded-2xl my-4 overflow-hidden md:h-[35rem] lg:h-96 lg:my-0 lg:w-[30rem]">
          <Image
            src={"/brown-shoe-2.jpeg"}
            alt="image"
            fill
            priority
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="w-full bg-[#00000071] rounded-2xl px-2 py-5">
          <h1 className="text-4xl font-jost text-white md:text-6xl">
            Step Into the Latest Trends: Subscribe to Our Shoe Lover&apos;s
            Newsletter!&quot;
          </h1>
          <p className="text-slate-200 my-2 md:text-2xl lg:text-base">
            Be the first to know about new arrivals, exclusive offers, and the
            latest trends in footwear. Sign up now for updates straight to your
            inbox!
          </p>
          <input type="text" placeholder="Enter your mail" className="w-full my-4 rounded-full p-4 outline-none" />
          <div className="flex flex-col items-end">
            <div className="bg-[#050505e3] w-11 h-11 rounded-full flex flex-col items-center justify-center">
              <ArrowRight className="text-[gray]" />
            </div>
          </div>
        </div>
      </div>
      {/* news letter ends here */}
      <div className="w-full my-5 px-2 lg:grid lg:grid-cols-4 lg:justify-between lg:gap-3 lg:pt-8">
        <div className="abt-footer-container">
          <p className="title">About</p>
          <p className="text-[gray] md:text-2xl lg:text-base">
            Ace Lux was born from a passion for redefining footwear. We believe
            shoes are more than just a necessity—they&apos;re a statement of who
            you are. Every pair of Ace Lux shoes is meticulously crafted using
            premium materials and innovative techniques, ensuring a perfect
            balance of style, durability, and comfort.
          </p>
        </div>
        <div className="footer-logo-p">
          <p>Acelux</p>
        </div>
        <ul className="footer-ul">
          <li className="title">Quick Link</li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#services">Services</Link>
          </li>
          <li>
            <Link href="#features">Features</Link>
          </li>
          <li>
            <Link href="#gallery">Gallery</Link>
          </li>
          <li>
            <Link href="#products">Featured Products</Link>
          </li>
        </ul>
        <span className="flex flex-col justify-between gap-y-10">
          <ul className="footer-ul">
            <li className="title">Contacts</li>
            <li>
              <Link href="tel:+234-802-604-3410" className="footer-contact">
                <Phone /> +234-802-604-3410
              </Link>
            </li>
            <li>
              <Link href="mailto:zainnyzyy@gmail.com" className="footer-contact">
                <Mail />zainnyzyy@gmail.com
              </Link>
            </li>
            <li>
              <Link href="" className="footer-contact">
               <MapPin />Kubwa Arab road
              </Link>
            </li>
          </ul>{" "}
          <ul className="footer-ul">
            <li className="title">Socials</li>
            <span className="flex flex-row items-center gap-2">
              <li>
                <Link href="">
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link href="">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link href="wa.me/2348026043410">
                  <FaWhatsapp />
                </Link>
              </li>{" "}
              <li>
                <Link href="mailto:zainnyzyy@gmail.com">
                  <SiGmail />
                </Link>
              </li>
            </span>
          </ul>
        </span>
      </div>
      <div className="w-full h-6 py-8 mt-6 border-b border-solid-[gray]">
        <p className="text-center text-[gray]">Designed by Pinnacle</p>
      </div>
    </section>
  );
};

export default Footer;
