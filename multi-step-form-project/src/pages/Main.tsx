import "../styles/destination.css";
import { SideBar,Body } from "..";
import { useAppSelector } from "../hooks/typedRedux";
function Main() {
  const pageNumberValue = useAppSelector((state)=> state.pageNumber.value);
  return <main>
<div className="main-content">
{
  pageNumberValue===5?"":<SideBar/>
}
   <Body/>
</div>
  </main>;
}
export default Main;
