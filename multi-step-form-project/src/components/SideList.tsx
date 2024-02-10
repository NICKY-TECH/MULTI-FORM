import { useDispatch } from "react-redux"
import { useAppSelector,useAppDispatch } from "../hooks/typedRedux";
import { pageState } from "../features/page";
import "../styles/destination.css"


function SideList(
 props:{step:number,title:string}){
    const dispatch = useAppDispatch()
    function clickStep(e:React.MouseEvent<HTMLSpanElement, MouseEvent>){
        const value:string | null = e.currentTarget.textContent;
        const usedValue:string = value!==null? value:"1";
        dispatch(pageState(parseInt(usedValue)))
    }
return <li className="inner-list-container">
        <span  className="step-value"
        onClick={(e)=>{
        clickStep(e)
        }}>
     {props.step}
        </span>
        <ul className="step-title-container">
            <li className="step">
                STEP {props.step}
            </li>
            <li className="step-title">
{props.title}
            </li>
        </ul>
    
    </li>
}

export default SideList