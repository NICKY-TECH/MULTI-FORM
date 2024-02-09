import "../styles/destination.css";
import { Header, SubHeading, Card, arcade, advanced, pro, Button } from "..";

function SelectPlan() {
  function switchButton(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log(e);
    if (e.clientX >= 799) {
      console.log("Yearly");
    } else {
      console.log("Monthly");
    }
  }
  return (
    <section className="personal">
      <div className="select-plan-content">
        <div className="headings-container">
          <Header {...{ title: "Select your plan" }} />
          <SubHeading
            {...{
              title: "You have the option of monthly or yearly billing..",
            }}
          />
        </div>
        <div className="card-container">
          <div className="cards">
            <Card {...{ title: "Arcade", price: "$9/mo", icon: arcade }} />
            <Card
              {...{ title: "Advanced", price: " $12/mo", icon: advanced }}
            />
            <Card {...{ title: "Pro", price: "$15/mo", icon: pro }} />
          </div>
        </div>
        <div className="switcher">
          <p className="switched-to">Monthly</p>
          <button
            className="switcher-button"
            onClick={(e) => {
              switchButton(e);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-circle"
            >
              <circle cx="12" cy="12" r="10" fill="#ffffff"></circle>
            </svg>
          </button>
          <p className="switched-to">Yearly</p>
        </div>
        <div className="display-navigation">
          <a href="#" className="go-back">Go Back</a>
       <Button {...{ text:"Next Page"}}/>
        </div>
      </div>
    </section>
  );
}

export default SelectPlan;
