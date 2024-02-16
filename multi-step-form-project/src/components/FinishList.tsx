import "../styles/destination.css";

function FinishList(props:{title:string|undefined,amount:string|undefined}) {
  return (
    <ul className="other-services-finish">
      <li className="first">{props.title}</li>
      <li className="last"> {props.amount}</li>
    </ul>
  );
}

export default FinishList;
