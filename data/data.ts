import User1 from "../public/user1.jpg"
import User2 from "../public/user2.jpg"
import User3 from "../public/user3.jpg"
import User4 from "../public/user4.jpg"

// Featured section images
// import Lady1 from "../public/lady1.jpg"
// import Lady2 from "../public/lady2.jpg"

// import BrownSandal from "../public/brown-sandal.jpg"
// import BrownSandal2 from "../public/brown-sandal2.jpg"
// import FlipFlop from "../public/flipflop1.jpg"
// import FlipFlop2 from "../public/flipflop2.jpg"
// import AllBlack from "../public/all-black.jpg"
// import AllBlack2 from "../public/all-black-2.jpg"
// import BrownPair from "../public/brown-pair1.jpg"
// import BrownPairRg from "../public/brown-pair-rg.jpg"
// import BlackPair from "../public/black-pair.jpg"
// import Brown from "../public/brown.jpg"

import {
  Gem,
  Cog,
  Wrench,
  Ruler,
  Paintbrush,
  Gift,
  Hammer,
  Palette,
  Leaf,
  HandHeart,
  Handshake,
  ShieldCheck
} from "lucide-react"

export const items = [
    {
      id: 1,
      name: "John Doe",
      designation: "Designer",
      image: User1
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "Frontend Developer",
      image: User2
    },
    {
      id: 3,
      name: "Emily Johnson",
      designation: "Backend Developer",
      image: User3
    },
    {
      id: 4,
      name: "Michael Brown",
      designation: "Project Manager",
      image: User4
    },
    {
      id: 5,
      name: "Sophia Davis",
      designation: "UX Designer",
      image: User1
    }
  ];

  export const services = [
    {
      id: 1,
      header: "Custom Shoe Design",
      content: "Our expert shoemakers work closely with you to create the perfect custom design. Whether it’s for a special event, your brand, or personal style, we bring your ideas to reality with unmatched craftsmanship.",
      icon: Gem
    },
    {
      id: 2,
      header: "Handcrafted Shoes",
      content: "Every shoe is meticulously handcrafted, using only premium materials. Our attention to detail ensures that each pair is not only durable but also a work of art made just for you.",
      icon: Cog
    },
    {
      id: 3,
      header: "Shoe Repair & Restoration",
      content: "We offer professional shoe repair and restoration services to extend the life of your favorite pairs. From sole replacements to leather restoration, we restore your shoes to their former glory.",
      icon: Wrench
    },
    {
      id: 4,
      header: "Shoe Fitting & Sizing Consultation",
      content: "Our personalized fitting service ensures that your shoes feel as good as they look. Our experts will help you find the perfect fit, taking your unique measurements into account for maximum comfort.",
      icon: Ruler
    },
    {
      id: 5,
      header: "Shoe Customization Services",
      content: "Want to add a unique touch to your shoes? Our customization options include color choices, stitching, embossing, and more. We’ll help make your shoes truly one-of-a-kind.",
      icon: Paintbrush
    },
    {
      id: 6,
      header: "Limited Edition Collections",
      content: "We periodically release exclusive, limited-edition shoes that showcase our design team’s creativity. Get access to unique styles before they’re gone, and own a rare piece of footwear.",
      icon: Gift
    }
  ]
  
  export const featuredProducts = [
    {
      id: 1,
      productName: "Handcrafted Leather Palm Sandals - Men",
      description: "Experience ultimate comfort with our premium handcrafted leather palm sandals, designed for everyday wear with a classic touch of elegance.",
      images: [ "brown-sandal.jpg", "brown-sandal2.jpg" ],
      price: "$40.00"
    },
    {
      id: 2,
      productName: "Handmade Leather Slippers - Women",
      description: "Soft, flexible, and durable. These handmade leather slippers are designed to provide all-day comfort with a stylish, minimalist look.",
      images: [ "flipflop1.jpg", "flipflop2.jpg"],
      price: "$35.00"
    },
    {
      id: 3,
      productName: "Men's Custom Leather Sandals",
      description: "Crafted with care and precision, these custom leather sandals provide a personalized fit and a refined style that lasts for years.",
      images: [ "all-black.jpg", "all-black-2.jpg"],
      price: "$55.00"
    },
    {
      id: 4,
      productName: "Elegant Handmade Leather Slippers - Women",
      description: "Perfect for both indoor and outdoor use, these elegant leather slippers for women are hand-stitched with fine craftsmanship for a luxurious experience.",
      images: [ "lady1.jpg", "lady2.jpg" ],
      price: "$62.00"
    },
    {
      id: 5,
      productName: "Vintage Leather Palm Sandals - Men",
      description: "With a vintage flair, these leather palm sandals for men are designed to offer both comfort and a timeless aesthetic.",
      images: [ "brown-pair1.jpg", "black-pair.jpg"],
      price: "$32.00"
    },
    {
      id: 6,
      productName: "Premium Handmade Leather Slippers - Women",
      description: "Luxuriously soft, durable, and handcrafted from the finest leather, these slippers offer superior comfort while maintaining a chic style.",
      images: [ "black-pair.jpg", "brown.jpg" ],
      price: "$48.00"
    }
  ];


  export const whyChooseUsContent = [
    {
      id: 0,
      title: "Unmatched Craftsmanship",
      description: "Every pair of Ace Lux shoes is meticulously handcrafted using the finest materials, ensuring durability and timeless elegance.",
      icon: Hammer // Hammer and Wrench
    },
    {
      id: 1,
      title: "Premium Comfort",
      description: "Designed with your comfort in mind, our shoes provide all-day support without compromising on style.",
      icon: HandHeart // Couch
    },
    {
      id: 2,
      title: "Sophisticated Designs",
      description: "From classic silhouettes to modern trends, we offer designs that elevate your look for any occasion.",
      icon: Palette // Palette
    },
    {
      id: 3,
      title: "Sustainable Practices",
      description: "We are committed to sustainability, using eco-friendly materials and ethical production methods to create our footwear.",
      icon: Leaf // Leaf
    },
    {
      id: 4,
      title: "Customer-Centric Approach",
      description: "Your satisfaction is our priority. From personalized recommendations to hassle-free returns, we make your shopping experience seamless.",
      icon: Handshake // Handshake
    },
    {
      id: 5,
      title: "Trusted by Thousands",
      description: "Join our community of fashion-forward individuals who trust Ace Lux for luxury and comfort in every step.",
      icon: ShieldCheck // Star
    }
  ];
  