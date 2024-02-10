import "../styles/destination.css";
import { useAppSelector } from "../hooks/typedRedux";
import { Personal,SelectPlan,PickAdd,Finish,Thanks } from "..";

function Body (){
const pageNumberValue = useAppSelector((state)=> state.pageNumber.value);
return <section className="body">
    {
        pageNumberValue===1?<Personal/>:pageNumberValue===2?<SelectPlan/>
        :pageNumberValue===3?<PickAdd/>:pageNumberValue===4?<Finish/>:""
    }


</section>
}

export default Body