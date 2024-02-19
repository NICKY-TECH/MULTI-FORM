import "../styles/destination.css";
import { useAppSelector,useAppDispatch } from "../hooks/typedRedux";
import { pageState } from "../features/page";



function Button(props: { text: string,name:string }) {
  const dispatch = useAppDispatch()
  const pageNumberValue = useAppSelector((state)=> state.pageNumber.value);
function nextPage(){
  if(pageNumberValue>=2 && pageNumberValue<=4){
    // dispatch(submitPersonalFormState(true))
    const nexPageNumber = pageNumberValue +1;
    dispatch(pageState(nexPageNumber))
  }

}


  return <button  className={props.name} onClick={()=>{
    nextPage();
  }}>
    {props.text}
  </button>
}

export default Button;
