import "../styles/destination.css";

function Card(props: {
  title: string;
  price: string;
  promo?: string;
  icon: string;
}) {
  return (
    <div className="card">
     <div className="inner-card">
     <div className="plan-icon">
        <img src={props.icon} />
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
