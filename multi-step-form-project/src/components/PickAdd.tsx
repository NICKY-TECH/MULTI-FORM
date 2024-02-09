import "../styles/destination.css";
import { Header, SubHeading, Card, arcade, advanced, pro, Button,PickItem } from "..";

function PickAdd(){
    return <section className="personal">
    <div className="select-plan-content">
      <div className="headings-container">
        <Header {...{ title: "Pick add-ons" }} />
        <SubHeading
          {...{
            title: "Add-ons help enhance your gaming experience.",
          }}
        />
      </div>
      <div className="pick-addons-container">
<PickItem {...{title:"Online service", subtext:"Access to multiplayer games", amount:"+$1/mo"}}/>
<PickItem {...{title:"Larger storage", subtext:"Extra 1TB of cloud save", amount:" +$2/mo"}}/>
<PickItem {...{title:"Customizable Profile", subtext:"Custom theme on your profile", amount:"+$2/mo"}}/>

      </div>
      </div>
      </section>
}

export default PickAdd