import "../styles/destination.css";
import { Header, SubHeading, Card, arcade, Footer,planArray } from "..";
import { useAppSelector, useAppDispatch } from "../hooks/typedRedux";
import { planOptionState } from "../features/planOption";
import { planState } from "../features/plan";
import { useEffect } from "react";

function SelectPlan() {
  const plan = useAppSelector((state) => state.planValue.value);
  const selectedPlan=useAppSelector((state) => state.planOption.value);
  const dispatch = useAppDispatch();
  function switchButton() {
    dispatch(planState());
  }
useEffect(()=>{
  if(plan===false){
    dispatch(planOptionState("Monthly"));
  }else if (plan===true){
    dispatch(planOptionState("Yearly"));
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
           {
            planArray.map((item)=>{
return <Card {...{ title: item.title, price:selectedPlan==="Monthly"?item.priceMonthly:item.priceYearly, icon: arcade, promo:selectedPlan=="Monthly"?item.promoMonthly:item.promoYearly,img:item.img }} key={item.id}/>
            })
           }
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
            onClick={
              switchButton
            }
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
