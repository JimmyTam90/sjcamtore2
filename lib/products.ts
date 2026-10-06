import { affiliateUrl } from "./affiliate";

const IMG = "https://sjcamstores.com/cdn/shop/files/";

export type Product = {
  id: string;
  name: string;
  tagline: string;
  href: string;
  image: string;
  alt: string;
  /** Price from the merchant product page at research time; undefined = conflicting/unverified, so not shown. */
  listedPrice?: string;
  specs: string[];
  compare: { video: string; stabilization: string; screens: string; water: string; battery: string; weight: string };
};

export const PRODUCTS: Product[] = [
  {
    id: "sj10-pro",
    name: "SJCAM SJ10 Pro Dual Screen",
    tagline: "Front and rear screens for vlogging, 4K at 60 fps.",
    href: affiliateUrl("/products/sj10-pro-dual-screen-action-camera"),
    image: `${IMG}sj10-pro-dual-screen-action-camera-524920.png?v=1782108407`,
    alt: "SJCAM SJ10 Pro dual screen action camera",
    listedPrice: "$249",
    specs: ["4K up to 60 fps, 20 MP photos", "6-axis gyro stabilization", "1.3\" front + 2.33\" rear touch screen", "Waterproof 5 m, 30 m with included case"],
    compare: { video: "4K up to 60 fps", stabilization: "6-axis gyro", screens: "1.3\" front + 2.33\" rear touch", water: "5 m body / 30 m with case", battery: "Up to 70 min (4K/30)", weight: "112.5 g" },
  },
  {
    id: "sj11-active",
    name: "SJCAM SJ11 Active",
    tagline: "Metal-body dual-screen camera with EIS and gyro.",
    href: affiliateUrl("/products/sj11-active-action-camera"),
    image: `${IMG}sj11-active-action-camera-545472.png?v=1782108373`,
    alt: "SJCAM SJ11 Active action camera",
    listedPrice: "$189",
    specs: ["4K 30 fps, 2K 60 fps, 20 MP photos", "EIS + 6-axis gyro stabilization", "2.33\" touch + 1.3\" screen", "Waterproof 5 m, 30 m with included case"],
    compare: { video: "4K 30 fps / 2K 60 fps", stabilization: "EIS + 6-axis gyro", screens: "2.33\" touch + 1.3\"", water: "5 m body / 30 m with case", battery: "100 min (4K/30)", weight: "108 g" },
  },
  {
    id: "c300",
    name: "SJCAM C300",
    tagline: "Detachable battery: compact pocket cam or long-run handle.",
    href: affiliateUrl("/products/c300-action-camera"),
    image: `${IMG}c300-action-camera.png?v=1782108662`,
    alt: "SJCAM C300 dual-screen action camera",
    specs: ["4K 30 fps, 20 MP photos", "6-axis gyro stabilization", "Dual 1.3\" touch screens", "30 m in waterproof case"],
    compare: { video: "4K 30 fps", stabilization: "6-axis gyro", screens: "Dual 1.3\" touch", water: "30 m in case", battery: "460 min with handle + small battery; 120 min Pocket (4K/30)", weight: "132 g (C300) / 55 g (Pocket)" },
  },
  {
    id: "a50",
    name: "SJCAM A50 Body Camera",
    tagline: "Wearable 4K body cam with GPS and night vision.",
    href: affiliateUrl("/products/a50-body-camera"),
    image: `${IMG}a50-body-camera.png?v=1782108692`,
    alt: "SJCAM A50 body camera",
    listedPrice: "$229",
    specs: ["4K 30 fps, 20 MP photos", "Built-in GPS, LED + infrared night vision", "2.0\" touch screen, 135° lens", "IP65 dust and water-jet resistant"],
    compare: { video: "4K 30 fps", stabilization: "Not listed", screens: "2.0\" touch", water: "IP65 (not for submersion)", battery: "300 min (1080p/30); up to 6 h stated", weight: "145 g" },
  },
];
