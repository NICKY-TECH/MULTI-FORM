import "../styles/destination.css";
import { Header, SubHeading, Card, arcade, advanced, pro, Footer } from "..";
import { useAppSelector, useAppDispatch } from "../hooks/typedRedux";
import { planState } from "../features/plan";
import { useEffect, useState } from "react";

function SelectPlan() {
  const plan = useAppSelector((state) => state.planValue.value);
  const [selectedPlan, setSelectedPlan] = useState("Monthly");
  const dispatch = useAppDispatch();
  function switchButton(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    dispatch(planState());
  }
useEffect(()=>{
  if(plan===false){
    setSelectedPlan("Monthly")
  }else if (plan===true){
    setSelectedPlan("Yearly")
  }
},[plan])
  return (
    <section className="personal">
      <div className="select-plan-content">
        <div className="headings-container">
          <Header {...{ title: "Select your plan" }} />
          <SubHeading
            {...{
              title: "You have the option of monthly or yearly billing..",
            }}
          />
        </div>
        <div className="card-container">
          <div className="cards">
            <Card {...{ title: "Arcade", price:selectedPlan==="Monthly"?"$9/mo":"$90/yr", icon: arcade, promo:selectedPlan=="Monthly"?"":"2 months free" }} />
            <Card
              {...{ title: "Advanced", price:selectedPlan==="Monthly"?"$12/mo":"$120/yr", icon: advanced, promo:selectedPlan=="Monthly"?"":"2 months free" }}
            />
            <Card {...{ title: "Pro", price:selectedPlan==="Monthly"?"$15/mo":"$150/yr", icon: pro, promo:selectedPlan=="Monthly"?"":"2 months free" }}/>
          </div>
        </div>
        <div className="switcher">
          <p
            className={
              plan
                ? "switched-to text-primaryCustom-marineBlue"
                : "switched-to text-neutralCustom-coolGray"
            }
          >
            Monthly
          </p>
          <button
            className={
              plan
                ? "switcher-button justify-end"
                : "switcher-button justify-start"
            }
            onClick={(e) => {
              switchButton(e);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-circle h-full"
            >
              <circle cx="12" cy="12" r="10" fill="#ffffff"></circle>
            </svg>
          </button>
          <p
            className={
              plan
                ? "switched-to text-neutralCustom-coolGray"
                : "switched-to text-primaryCustom-marineBlue"
            }
          >
            Yearly
          </p>
        </div>
        <div className="display-navigation">
          <Footer />
        </div>
      </div>
    </section>
  );
}

export default SelectPlan;
