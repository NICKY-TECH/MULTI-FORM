import "../styles/destination.css";
import { useAppSelector } from "../hooks/typedRedux";
import { Personal,SelectPlan,PickAdd,Finish,Thanks } from "..";

function Body (){
// const pageNumberValue = useAppSelector((state)=> state.pageNumber.value);
return <section className="body">
<Personal/>

</section>
}

export default Body