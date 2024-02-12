import "../styles/destination.css"
import { useAppSelector,useAppDispatch } from "../hooks/typedRedux";
import { useEffect } from "react";
function Input(props:{label:string,placeholder:string,type:string}) {
  const isSubmitted= useAppSelector((state)=> state.  submitForm.value);
  useEffect(()=>{
if(isSubmitted===true){
if(props.label==="Name"){
console.log("well")
}
}
  },[isSubmitted])
  return (
    <div className="form-container w-full">
      <label>{props.label}</label>
      <input placeholder={props.placeholder} className="w-full" type={props.type} />
    </div>
  );
}
export default Input;
