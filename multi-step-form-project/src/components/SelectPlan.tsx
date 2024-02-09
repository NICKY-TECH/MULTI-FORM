import "../styles/destination.css";
import { Header,SubHeading } from "..";

function SelectPlan (){
    return  <section className="personal">
    <div className="personal-content">
     <div className="headings-container">
     <Header {...{ title: "Select your plan" }} />
      <SubHeading
        {...{
          title: "You have the option of monthly or yearly billing..",
        }}
      />
     </div>
     </div>
     </section>
}

export default SelectPlan
