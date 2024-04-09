import Image, { StaticImageData } from "next/image";
import { Route } from "@/routers/types";
import imageRightPng from "@/images/slide-1-b.jpg";
import imageRightPng2 from "@/images/slide-2-b.jpg";
import imageRightPng3 from "@/images/slide-3-b.jpg";
import imageSlide4 from "@/images/slide-4-b.png";
import imageSlide5 from "@/images/side-5.jpg";
import imageSlide5_n from "@/images/silde-5.png";
import imageSlide5_n_b from "@/images/slide-5-b.png";

import Slide4 from "@/images/productos-hoodie-de-gira-blanco-2.jpg";
import Slide5 from "@/images/productos-remera-ojos-negra-2.jpg";
import Slide6 from "@/images/productos-remera-de-gira-blanca-2.jpg";

interface slide {
  image: StaticImageData | string;
  heading: string;
  subHeading: string;
  btnText: string;
  btnLink: Route;
}

export const BIG_SCREEN_SLIDES: slide[] = [
  {
    image: imageSlide5_n,
    heading: "Drop #01",
    subHeading: "In this season, find the best 🔥",
    btnText: "Shop Now",
    btnLink: "/",
  },
  {
    image: imageSlide4,
    heading: "Drop #02",
    subHeading: "In this season, find the best 🔥",
    btnText: "Shop Now",
    btnLink: "/",
  },
  {
    image: imageRightPng3,
    heading: "Drop #03",
    subHeading: "In this season, find the best 🔥",
    btnText: "Shop Now",
    btnLink: "/",
  },
  {
    image: imageRightPng,
    heading: "Drop #04",
    subHeading: "In this season, find the best 🔥",
    btnText: "Shop Now",
    btnLink: "/",
  },
  {
    image: imageRightPng2,
    heading: "Drop #05",
    subHeading: "In this season, find the best 🔥",
    btnText: "Shop Now",
    btnLink: "/",
  },
];

export const SMALL_SCREEN_SLIDES: slide[] = [
  {
    image: imageSlide5_n_b,
    heading: "Drop #01",
    subHeading: "In this season, find the best 🔥",
    btnText: "Shop Now",
    btnLink: "/",
  },
  {
    image: Slide4,
    heading: "Drop #02",
    subHeading: "In this season, find the best 🔥",
    btnText: "Shop Now",
    btnLink: "/",
  },
  {
    image: Slide5,
    heading: "Drop #03",
    subHeading: "In this season, find the best 🔥",
    btnText: "Shop Now",
    btnLink: "/",
  },
  {
    image: Slide6,
    heading: "Drop #04",
    subHeading: "In this season, find the best 🔥",
    btnText: "Shop Now",
    btnLink: "/",
  },
  {
    image: imageSlide5,
    heading: "Drop #05",
    subHeading: "In this season, find the best 🔥",
    btnText: "Shop Now",
    btnLink: "/",
  },
];
