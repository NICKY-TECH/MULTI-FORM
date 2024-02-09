import "../styles/destination.css"
function Input(props:{label:string,placeholder:string}) {
  return (
    <div className="form-container w-full">
      <label>{props.label}</label>
      <input placeholder={props.placeholder} className="w-full" />
    </div>
  );
}
export default Input;
