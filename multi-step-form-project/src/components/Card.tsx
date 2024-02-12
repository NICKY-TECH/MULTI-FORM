import "../styles/destination.css";
import { useAppDispatch } from "../hooks/typedRedux";
import { SelectedPlanState } from "../features/selectedPlan";

function Card(props: {
  title: string;
  price: string;
  promo?: string;
  img: string;
}) {
  const dispatch = useAppDispatch();
  function clickCard(e:React.MouseEvent<HTMLDivElement, MouseEvent>) {
    dispatch(SelectedPlanState(
  e.currentTarget.children[0]?.children[1]?.children[0].innerHTML));
  }

  return (
    <div
      className="card"
      onClick={(e) => {
        clickCard(e);
      }}
    >
      <div className="inner-card">
        <div className="plan-icon">
          <img src={props.img} />
        </div>
        <div className="plan-details">
          <p className="plan-title">{props.title}</p>
          <p className="plan-price">{props.price}</p>
          {props.promo ? <p className="plan-promo">{props.promo}</p> : ""}
        </div>
      </div>
    </div>
  );
}

export default Card;
