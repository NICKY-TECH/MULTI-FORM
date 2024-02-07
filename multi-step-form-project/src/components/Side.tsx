import { SideList } from "..";
function Side() {
  return (
    <ul>
      <SideList {...{ step: 1, title: "YOUR INFO" }} />
      <SideList {...{ step: 1, title: "SELECT PLAN" }} />
      <SideList {...{ step: 1, title: "ADD-ONS" }} />
      <SideList {...{ step: 1, title: "SUMMARY" }} />
    </ul>
  );
}
export default Side;
