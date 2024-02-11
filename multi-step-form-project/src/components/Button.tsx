import "../styles/destination.css";
import { useAppSelector,useAppDispatch } from "../hooks/typedRedux";
import { pageState } from "../features/page";

function Button(props: { text: string }) {
  const dispatch = useAppDispatch()
  const pageNumberValue = useAppSelector((state)=> state.pageNumber.value);
function nextPage(){
if(pageNumberValue>=1 && pageNumberValue<4){
const nexPageNumber = pageNumberValue +1;
dispatch(pageState(nexPageNumber))
}
}
  return <button  className="next-button" onClick={nextPage}>
    {props.text}
  </button>
}

export default Button;
