import "../styles/destination.css";

function FinishList(props: { first: string; last: string }) {
  return (
    <ul className="other-services-finish">
      <li className="first">{props.first}</li>
      <li className="last">{props.last}</li>
    </ul>
  );
}

export default FinishList;
