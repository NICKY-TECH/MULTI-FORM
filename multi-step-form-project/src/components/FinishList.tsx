import "../styles/destination.css";

function FinishList(props:{title:string|undefined,amount:number|undefined,type:string}) {
  return (
    <ul className="other-services-finish">
      <li className="first">{props.title}</li>
      <li className="last"> {props.type==="Monthly"?`$${props.amount}/mo`:`$${props.amount}/yr`}</li>
    </ul>
  );
}

export default FinishList;
