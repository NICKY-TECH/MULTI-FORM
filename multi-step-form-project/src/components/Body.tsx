import "../styles/destination.css";
import { useAppSelector } from "../hooks/typedRedux";
import { Personal,SelectPlan } from "..";

function Body (){
// const pageNumberValue = useAppSelector((state)=> state.pageNumber.value);
return <section className="body">
 <SelectPlan/>

</section>
}

export default Body