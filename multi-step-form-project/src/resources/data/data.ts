import {  advanced,
  arcade,
  pro} from "../../index";
export const planArray: {
  img:string,
  title: string;
  priceMonthly: number;
  priceYearly: number;
  promoMonthly: string;
  promoYearly: string;
  id:number
}[] = [
  {
    img:arcade,
    title: "Arcade",
    priceMonthly: 9,
    priceYearly: 90,
    promoMonthly: "",
    promoYearly: "2 months free",
    id:0
  },
  {
    img:advanced,
    title: "Advanced",
    priceMonthly: 12,
    priceYearly: 120,
    promoMonthly: "",
    promoYearly: "2 months free",
    id:1
  },
  {
    img:pro,
    title: "Pro",
    priceMonthly: 15,
    priceYearly: 150,
    promoMonthly: "",
    promoYearly: "2 months free",
    id:2
  },
];

export const pickItemArray = [
  {
    title: "Online service",
    subtext: "Access to multiplayer games",
    amountMonthly:1,
    amountYearly: 10,
    id:0
  },
  {
    title: "Larger storage",
    subtext: "Extra 1TB of cloud save",
    amountMonthly:2,
    amountYearly: 20,
    id:1
  },
  {
    title: "Customizable Profile",
    subtext: "Custom theme on your profile",
    amountMonthly:2,
    amountYearly: 20,
    id:2
  },
];
