import { StaticImageData } from "next/image"

export interface itemsType {
    items: {
      id: number;
      name: string;
      designation: string;
      image: StaticImageData;
    }[];
  }

  // image slider types
  export interface imageType  {
    items: {
      image: string
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
  }