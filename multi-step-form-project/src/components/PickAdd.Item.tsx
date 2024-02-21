import "../styles/destination.css";
import { Footer,pickItemArray} from "..";
import { useEffect, useRef } from "react";
import { useAppSelector, useAppDispatch } from "../hooks/typedRedux";
import { addOnState } from "../features/addOn";

let arr: {
  title: string | undefined;
  amount: number | undefined;
  type: string;
}[] = [];
function PickItem(props: { title: string; subtext: string; amount: number }) {
  const dispatch = useAppDispatch();
  const amountRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);

  const selectedPlan = useAppSelector((state) => state.planOption.value);
  function checkedOption(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      const numericAmount = pickItemArray.find(
        (item) => item.title === titleRef.current?.innerHTML
      );
      const selectedBox:{
        title:string|undefined;
        amount:number|undefined;
        type:string
      } = {
        title: titleRef.current?.innerHTML,
        amount:selectedPlan==="Monthly"?numericAmount?.amountMonthly:numericAmount?.amountYearly,
        type: selectedPlan,
      };
      console.log("selected")
      console.log(selectedBox)
      const foundIndex = arr.findIndex(
        (item) => item.title === titleRef.current?.innerHTML
      );
      if (foundIndex === -1) {
        arr = [...arr, selectedBox];
        dispatch(addOnState(arr));
      }
    } else if (e.target.checked === false) {
      const found = arr.findIndex(
        (item) => item.title === titleRef.current?.innerHTML
      );
      arr.splice(found, 1);
      dispatch(addOnState(arr));
    }

  }
  useEffect(()=>{
arr=[]
dispatch(addOnState(arr))
        })
  return (
    <div className="pickitem-container">
      <div className="top-pick">
        <div className="start-pick">
          <input
            type="checkbox"
            onChange={(e) => {
              checkedOption(e);
            }}
          />
          <div className="pick-details">
            <p className="main-pick-title" ref={titleRef}>
              {props.title}
            </p>
            <p className="sub-pick-title">{props.subtext}</p>
          </div>
        </div>
        <div className="end-pick">
          <p className="amount" ref={amountRef}>
            {selectedPlan === "Monthly"
              ? `+$${props.amount}/mo`
              : `+$${props.amount}/yr`}
          </p>
        </div>
      </div>
      <div className="display-navigation">
        <Footer {...{ text: "Next Page", name: "next-button" }} />
      </div>
    </div>
  );
}

export default PickItem;
