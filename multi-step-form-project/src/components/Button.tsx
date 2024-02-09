import "../styles/destination.css";

function Button(props: { text: string }) {
  return <button  className="next-button">
    {props.text}
  </button>
}

export default Button;
