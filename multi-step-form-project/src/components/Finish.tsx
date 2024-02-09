import "../styles/destination.css";
import { Header, SubHeading, Card, arcade, advanced, pro, Button } from "..";

function Finish() {
  return (
    <section className="personal">
      <div className="select-plan-content">
        <div className="headings-container">
          <Header {...{ title: "Finishing up" }} />
          <SubHeading
            {...{
              title: "Double-check everything looks OK before confirming.",
            }}
          />
        </div>
        <div className="main-content-select-plan">
            <div className="service-type">
                <div className="selected-first-detail">
                    <p className="selected-service-type-finish-page"></p>
                    <a href="#" className="edit-selected">Change</a>
                </div>

            </div>

        </div>
        <div className="display-navigation">
          <a href="#" className="go-back">Go Back</a>
       <Button {...{ text:"Next Page"}}/>
        </div>
      </div>
      
    </section>
  );
}

export default Finish;
