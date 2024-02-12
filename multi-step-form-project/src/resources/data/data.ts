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
}[] = [
  {
    img:arcade,
    title: "Arcade",
    priceMonthly: "$9/mo",
    priceYearly: "$90/yr",
    promoMonthly: "",
    promoYearly: "2 months free",
  },
  {
    img:advanced,
    title: "Advanced",
    priceMonthly: "$12/mo",
    priceYearly: "$120/yr",
    promoMonthly: "",
    promoYearly: "2 months free",
  },
  {
    img:pro,
    title: "Pro",
    priceMonthly: "$15/mo",
    priceYearly: "$150/yr",
    promoMonthly: "",
    promoYearly: "2 months free",
  },
];

export const pickItemArray = [
  {
    title: "Online service",
    subtext: "Access to multiplayer games",
    amountMonthly:"+$1/mo",
    amountYearly: "+$10/yr",
  },
  {
    title: "Larger storage",
    subtext: "Extra 1TB of cloud save",
    amountMonthly:"+$2/mo",
    amountYearly: "+$20/yr",
  },
  {
    title: "Customizable Profile",
    subtext: "Custom theme on your profile",
    amountMonthly:"+$2/mo",
    amountYearly: "+$20/yr",
  },
];
