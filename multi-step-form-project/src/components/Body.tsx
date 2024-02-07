import "../styles/destination.css";
import { useSelector } from "react-redux";

function Body (){
const pageNumberValue = useSelector((state:{value:number})=> state.pageNumber.value);
return <section className="body">
    {
        pageNumberValue===1?"":""
    }

</section>
}

export default Body