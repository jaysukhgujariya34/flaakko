import Image, { StaticImageData } from "next/image";
import { Route } from "@/routers/types";
import imageRightPng from "@/images/slide-1-b.jpg";
import imageRightPng2 from "@/images/slide-2-b.jpg";
import imageRightPng3 from "@/images/slide-3-b.jpg";



import Slide4 from "@/images/productos-hoodie-de-gira-blanco-2.jpg";
import Slide5 from "@/images/productos-remera-ojos-negra-2.jpg";
import Slide6 from '@/images/productos-remera-de-gira-blanca-2.jpg';

interface Hero2DataType {
  image: StaticImageData | string;
  heading: string;
  subHeading: string;
  btnText: string;
  btnLink: Route;
}

export const HERO2_DEMO_DATA: Hero2DataType[] = [
  {
    image: imageRightPng2,
    heading: "Drop #01",
    subHeading: "In this season, find the best 🔥",
    btnText: "Shop Now",
    btnLink: "/",
  },
  {
    image: imageRightPng3,
    heading: "Drop #02",
    subHeading: "In this season, find the best 🔥",
    btnText: "Shop Now",
    btnLink: "/",
  },
  {
    image: imageRightPng,
    heading: "Drop #03",
    subHeading: "In this season, find the best 🔥",
    btnText: "Shop Now",
    btnLink: "/",
  },
];


export const BIG_SCREEN_SLIDES: Hero2DataType[] = [
 {
    image: imageRightPng2,
    heading: "Drop #01",
    subHeading: "In this season, find the best 🔥",
    btnText: "Shop Now",
    btnLink: "/",
  },
  {
    image: imageRightPng3,
    heading: "Drop #02",
    subHeading: "In this season, find the best 🔥",
    btnText: "Shop Now",
    btnLink: "/",
  },
  {
    image: imageRightPng,
    heading: "Drop #03",
    subHeading: "In this season, find the best 🔥",
    btnText: "Shop Now",
    btnLink: "/",
  },
];

export const SMALL_SCREEN_SLIDES: Hero2DataType[] = [
  {
    image: Slide4,
    heading: "Drop #01",
    subHeading: "In this season, find the best 🔥",
    btnText: "Shop Now",
    btnLink: "/",
  },
  {
    image: Slide5,
    heading: "Drop #02",
    subHeading: "In this season, find the best 🔥",
    btnText: "Shop Now",
    btnLink: "/",
  },
  {
    image: Slide6,
    heading: "Drop #03",
    subHeading: "In this season, find the best 🔥",
    btnText: "Shop Now",
    btnLink: "/",
  },
];

