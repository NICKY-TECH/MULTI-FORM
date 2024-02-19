import "../styles/destination.css";
import { useAppSelector,useAppDispatch } from "../hooks/typedRedux";
import { pageState } from "../features/page";
import { Button } from ".."

function Footer (props:{text:string,name:string}){
    const dispatch = useAppDispatch()
    const pageNumberValue = useAppSelector((state)=> state.pageNumber.value);
    function goBack (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        e.preventDefault()
        if(pageNumberValue>1 && pageNumberValue<=4){
         const previousPage = pageNumberValue -1;
         dispatch(pageState(previousPage))
        }
    
    }
    return <>
    <a href="#" className="go-back" onClick={(e)=>{
        goBack(e)
    }}>Go Back</a>
       <Button {...{ text:props.text, name:props.name}}/>
       </>
}

export default Footer