import {  advanced,
  arcade,
  pro} from "../../index";
export const planArray: {
  img:string,
  title: string;
  priceMonthly: string;
  priceYearly: string;
  promoMonthly: string;
  promoYearly: string;
  id:number
}[] = [
  {
    img:arcade,
    title: "Arcade",
    priceMonthly: "$9/mo",
    priceYearly: "$90/yr",
    promoMonthly: "",
    promoYearly: "2 months free",
    id:0
  },
  {
    img:advanced,
    title: "Advanced",
    priceMonthly: "$12/mo",
    priceYearly: "$120/yr",
    promoMonthly: "",
    promoYearly: "2 months free",
    id:1
  },
  {
    img:pro,
    title: "Pro",
    priceMonthly: "$15/mo",
    priceYearly: "$150/yr",
    promoMonthly: "",
    promoYearly: "2 months free",
    id:2
  },
];

export const pickItemArray = [
  {
    title: "Online service",
    subtext: "Access to multiplayer games",
    amountMonthly:"+$1/mo",
    amountYearly: "+$10/yr",
    id:0
  },
  {
    title: "Larger storage",
    subtext: "Extra 1TB of cloud save",
    amountMonthly:"+$2/mo",
    amountYearly: "+$20/yr",
    id:1
  },
  {
    title: "Customizable Profile",
    subtext: "Custom theme on your profile",
    amountMonthly:"+$2/mo",
    amountYearly: "+$20/yr",
    id:2
  },
];
