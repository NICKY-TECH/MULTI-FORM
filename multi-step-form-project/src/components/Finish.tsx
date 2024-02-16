import "../styles/destination.css";
import {
  Header,
  SubHeading,
  Card,
  arcade,
  advanced,
  pro,
  Button,
  FinishList,
  Footer,
  planArray,
  pickItemArray,
} from "..";
import { useAppSelector } from "../hooks/typedRedux";
import { useEffect, useState } from "react";

function Finish() {
  const [render, setRender] = useState<
    {
      title: string | undefined;
      amount: string | undefined;
    }[]
  >([]);
  const selectedValue = useAppSelector((state) => state.selectedPlan.value);
  const pageNumberValue = useAppSelector((state) => state.pageNumber.value);
  const addOnValue = useAppSelector((state) => state.addOn.value);
  const selectedPlan = useAppSelector((state) => state.planOption.value);
  const result: number | undefined = planArray.findIndex((items) => {
    return items.title === selectedValue;
  });
  console.log(addOnValue);
  // let priceValue = selectedPlan==="Monthly"?resul:"";
  useEffect(() => {
   setRender([...addOnValue])
  }, [pageNumberValue]);
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
                <a href="#" className="edit-selected">
                  Change
                </a>
              </div>
              <p className="selected-amount">
                {selectedPlan === "Monthly"
                  ? planArray[result].priceMonthly
                  : planArray[result].priceYearly}
              </p>
            </div>
            <hr />
            <div className="finish-list">
              {addOnValue.map((item, index) => {
                return (
                  <>
                    <FinishList {...{title:item.title, amount:item.amount}} key={index} />
                  </>
                );
              })}
            </div>
          </div>
          <div className="finalized">
            <p className="finalized-category">
              Total ({selectedPlan === "Monthly" ? "per month" : "per year"})
            </p>
            <p className="finalized-price"> +$1/mo</p>
          </div>
        </div>
        <div className="display-navigation">
          <Footer />
        </div>
      </div>
    </section>
  );
}

export default Finish;
