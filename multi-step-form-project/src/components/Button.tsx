import "../styles/destination.css";
import { useAppSelector,useAppDispatch } from "../hooks/typedRedux";
import { pageState } from "../features/page";
import { submitPickState } from "../features/isSubmitted";
import { useEffect } from "react";


function Button(props: { text: string }) {
  const dispatch = useAppDispatch()
  const pageNumberValue = useAppSelector((state)=> state.pageNumber.value);
  const errorObj = useAppSelector((state)=> state.error.value);
  const addValue = useAppSelector((state)=> state.addOn.value);
  // console.log(addValue)
  // console.log(errorObj.length)
function nextPage(){
  if(pageNumberValue>=1||pageNumberValue<4){
    // dispatch(submitPersonalFormState(true))
    const nexPageNumber = pageNumberValue +1;
    dispatch(pageState(nexPageNumber))
  }

}

// function submitDetails(){
// // dispatch(submitFormState(false))
// if(pageNumberValue===1){
// dispatch(submitFormState(true))
// }

  return <button  className="next-button" onClick={()=>{
    nextPage();
  }}>
    {props.text}
  </button>
}

export default Button;
