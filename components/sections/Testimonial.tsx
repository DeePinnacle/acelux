import { AnimatedTestimonials } from "@/components/ui/animated-testimonial";

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "The most comfortable shoes I've ever owned! AceLux has truly redefined what luxury footwear means. Perfect for both style and comfort.",
      name: "Mrs. Suleiman",
      designation: "Co-founder GridsTribe",
      src: "user.jpeg",
    },
    {
      quote:
        "I was blown away by the craftsmanship. Every detail is flawless and I get compliments every time I wear them!",
      name: "Lawal Zuleiha",
      designation: "Seamstress",
      src: "user-2.jpeg",
    },
    {
      quote:
        "Finally, a brand that combines style, sustainability, and comfort. I feel good knowing my shoes are eco-friendly and stunning.",
      name: "AbdulSalam Lukman",
      designation: "Engineer",
      src: "user-4.jpeg",
    },
    {
      quote:
        "AceLux is my go-to for both formal and casual occasions. Their designs are timeless, and the quality is unmatched.",
      name: "Adams Muqseet",
      designation: "Trader",
      src: "user-6.jpeg",
    },
    {
      quote:
        "AceLux exceeded my expectations! The quality is exceptional, and the fit feels tailor-made. Plus, their customer service is outstanding-I'm a customer for life!.",
      name: "AbdulRahman Kamaldeen",
      designation: "Banker",
      src: "user-7.jpeg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
export default Testimonial