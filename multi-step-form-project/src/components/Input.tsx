import "../styles/destination.css";
import { useAppSelector, useAppDispatch } from "../hooks/typedRedux";
function Input(props: {
  label: string;
  placeholder: string;
  type: string;
  email?: string;
  name?: string;
  tel?: string;
}) {
  return (
    <div className="form-container w-full">
      <div className="label-and-error">
        {" "}
        <label>{props.label}</label>
        {props.tel ? <span>{props.tel}</span> : ""}
        {props.email ? <span>{props.email}</span> : ""}
        {props.name ? <span>{props.name}</span> : ""}
      </div>
      <input
        placeholder={props.placeholder}
        className="w-full"
        type={props.type}
      />
    </div>
  );
}
export default Input;
