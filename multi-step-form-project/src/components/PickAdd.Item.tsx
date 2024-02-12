import "../styles/destination.css";
import { Button,Footer } from "..";


function PickItem (props:{title:string,subtext:string,amount:string}){
const arr:string[] = [];
console.log(arr)
function checkedOption(e:React.MouseEvent<HTMLInputElement, MouseEvent>){
const selectedBox ={
    title:e.currentTarget.checked &&  e.currentTarget.parentElement?.parentElement?.children[0].children[1].textContent,
}
if(selectedBox.title)
arr.push(selectedBox.title)
}

    return <div className="pickitem-container">
        <div className="top-pick">
        <div className="start-pick">
        <input type="checkbox" onClick={(e)=>{
            checkedOption(e)
        }}/>
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
      <Footer/>
        </div>

    </div>
}

export default PickItem
