import "../styles/destination.css";
import {
  Header,
  SubHeading,
  FinishList,
  Footer,
  planArray,
} from "..";
import { useAppSelector,useAppDispatch } from "../hooks/typedRedux";
import { pageState } from "../features/page";
import { useRef, useState } from "react";

function Finish() {
  const dispatch = useAppDispatch()
  const selectedValue = useAppSelector((state) => state.selectedPlan.value);
  const addOnValue = useAppSelector((state) => state.addOn.value);
  const selectedPlan = useAppSelector((state) => state.planOption.value);
  const result: number | undefined = planArray.findIndex((items) => {
    return items.title === selectedValue;
  });
 function changeOptions(){
  dispatch(pageState(2))
 }
 const sum = useRef<number>(selectedPlan === "Monthly"
 ?planArray[result].priceMonthly
 : planArray[result].priceYearly);
  for (let i=0; i<addOnValue.length;i++){
 if(addOnValue!=undefined&&addOnValue[i]!=undefined&&addOnValue[i].amount!=undefined){
  const currentLoop:number | undefined = addOnValue[i].amount==undefined? 0 :addOnValue[i].amount
 currentLoop!=undefined? sum.current = currentLoop + sum.current: sum.current = 0 + sum.current
 }
  }







  return (
    <section className="personal">
      <div className="select-plan-content">
        <div className="headings-container">
          <Header {...{ title: "Finishing up" }} />
          <SubHeading
            {...{
              title: "Double-check everything looks OK before confirming.",
            }}
          />
        </div>
        <div className="parent-container-main-content">
          <div className="main-content-select-plan">
            <div className="selected-service-type">
              <div className="selected-first-detail">
                <p className="selected-service-type-finish-page">
                  {selectedValue}({selectedPlan})
                </p>
                <a href="#" className="edit-selected" onClick={changeOptions}>
                  Change
                </a>
              </div>
              <p className="selected-amount">
                {selectedPlan === "Monthly"
                  ? `$${planArray[result].priceMonthly}/mo`
                  : `$${planArray[result].priceYearly}/yr`}
              </p>
            </div>
            <hr />
            <div className="finish-list">
              {addOnValue.map((item, index) => {
                return <FinishList {...{title:item.title, amount:item.amount,type:selectedPlan}} key={index}  />
              })}
            </div>
          </div>
          <div className="finalized">
            <p className="finalized-category">
              Total ({selectedPlan === "Monthly" ? "per month" : "per year"})
            </p>
            <p className="finalized-price">{selectedPlan==="Monthly"?`$${sum.current}/mo`:`$${sum.current}/yr`}</p>
          </div>
        </div>
        <div className="display-navigation">
          <Footer  {...{text:"Confirm", name:"confirm-button"}}/>
        </div>
      </div>
    </section>
  );
}

export default Finish;
