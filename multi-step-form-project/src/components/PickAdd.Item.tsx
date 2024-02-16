import "../styles/destination.css";
import { Footer } from "..";
import { useEffect, useRef } from "react";
import { useAppSelector, useAppDispatch } from "../hooks/typedRedux";
import { addOnState} from "../features/addOn"

let arr:{title:string|undefined,amount:string|undefined}[] = []
function PickItem(props: { title: string; subtext: string; amount: string }) {
  const dispatch = useAppDispatch();
  const pickForm = useAppSelector((state) => state.submitForm.value);
  const pageNumberValue = useAppSelector((state)=> state.pageNumber.value);
  const amountRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);


  function checkedOption(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      const selectedBox = {
        title: titleRef.current?.innerHTML,
        amount: amountRef.current?.innerHTML,
      };
      const foundIndex = arr.findIndex(
        (item) => item.title === titleRef.current?.innerHTML
      );
      if(foundIndex===-1){
        arr=[...arr,selectedBox];
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
            {props.amount}
          </p>
        </div>
      </div>
      <div className="display-navigation">
        <Footer />
      </div>
    </div>
  );
}

export default PickItem;
