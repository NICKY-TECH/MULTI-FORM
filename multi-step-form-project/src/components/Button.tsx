import "../styles/destination.css";
import { useAppSelector,useAppDispatch } from "../hooks/typedRedux";
import { pageState } from "../features/page";
import { submitFormState } from "../features/isSubmitted";


function Button(props: { text: string }) {
  const dispatch = useAppDispatch()
  const pageNumberValue = useAppSelector((state)=> state.pageNumber.value);
  const errorObj = useAppSelector((state)=> state.error.value);
  console.log(errorObj.length)
function nextPage(){
  if(pageNumberValue===1){
    dispatch(submitFormState(true))
    }else if(pageNumberValue>=2 && pageNumberValue<4){
      const nexPageNumber = pageNumberValue +1;
      dispatch(pageState(nexPageNumber))
    }

}

function submitDetails(){
dispatch(submitFormState(false))
if(pageNumberValue===1){
dispatch(submitFormState(true))
}
}
  return <button  className="next-button" onClick={()=>{
    nextPage();
    submitDetails()
  }}>
    {props.text}
  </button>
}

export default Button;
