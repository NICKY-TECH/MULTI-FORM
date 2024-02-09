import "../styles/destination.css";
import { useAppSelector } from "../hooks/typedRedux";
import { Personal,SelectPlan,PickAdd,Finish } from "..";

function Body (){
// const pageNumberValue = useAppSelector((state)=> state.pageNumber.value);
return <section className="body">
 <Finish/>

</section>
}

export default Body