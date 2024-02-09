import "../styles/destination.css";
import { Header, SubHeading, Card, arcade, advanced, pro, Button,FinishList } from "..";

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
      <div className="parent-container-main-content">
      <div className="main-content-select-plan">
            <div className="selected-service-type">
                <div className="selected-first-detail">
                    <p className="selected-service-type-finish-page">
                    Larger storage(Monthly)
                    </p>
                    <a href="#" className="edit-selected">Change</a>
                </div>
                <p className="selected-amount">
                +$2/mo
                </p>

            </div>
            <hr/>
            <div className="finish-list">
                <FinishList/>
                <FinishList/>
            </div>

        </div>
        <div className="finalized">
            <p className="finalized-category">Total (per month)</p>
            <p className="finalized-price"> +$1/mo</p>
             
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
