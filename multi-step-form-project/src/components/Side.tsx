import { SideList } from "..";
import "../styles/destination.css"
function Side() {
  return (
     <ul className="list-container">
      <SideList {...{ step: 1, title: "YOUR INFO" }} />
      <SideList {...{ step: 2, title: "SELECT PLAN" }} />
      <SideList {...{ step: 3, title: "ADD-ONS" }} />
      <SideList {...{ step: 4, title: "SUMMARY" }} />
    </ul>
  );
}
export default Side;
