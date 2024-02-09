import "../styles/destination.css";
import { Button } from "..";

function PickItem (props:{title:string,subtext:string,amount:string}){
    return <div className="pickitem-container">
        <div className="top-pick">
        <div className="start-pick">
        <input type="checkbox"/>
        <div className="pick-details">
            <p className="main-pick-title">{props.title}</p>
             <p className="sub-pick-title">{props.subtext}</p>
        </div>
        </div>
        <div className="end-pick">
<p className="amount">{props.amount}</p>
        </div>
        </div>
        <div className="display-navigation">
          <a href="#" className="go-back">Go Back</a>
       <Button {...{ text:"Next Page"}}/>
        </div>

    </div>
}

export default PickItem