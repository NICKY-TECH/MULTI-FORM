import "../styles/destination.css";
import { useAppSelector } from "../hooks/typedRedux";
import { Personal,SelectPlan,PickAdd } from "..";

function Body (){
// const pageNumberValue = useAppSelector((state)=> state.pageNumber.value);
return <section className="body">
 <PickAdd/>

</section>
}

export default Body