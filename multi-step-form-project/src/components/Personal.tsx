import "../styles/destination.css";
import { Header, SubHeading, InputField, Button } from "../index";
import { useState} from "react";
import { useAppSelector,useAppDispatch } from "../hooks/typedRedux";
import { pageState } from "../features/page";

// let errorArr:{
//   field:string,
//   error:string
// }[] = []
// const numberPattern =/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

function Personal() {
  const dispatch = useAppDispatch()
  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [telError, setTelError] = useState<string>("");
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const pageNumberValue = useAppSelector((state)=> state.pageNumber.value);
  function submitPersonalForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEmailError("");
    setNameError("");
    setTelError("");
    const inputName: HTMLInputElement | null =
      e.currentTarget.querySelector<HTMLInputElement>('input[type="text"]');
    const inputEmail: HTMLInputElement | null =
      e.currentTarget.querySelector<HTMLInputElement>('input[type="email"]');
    const inputTel: HTMLInputElement | null =
      e.currentTarget.querySelector<HTMLInputElement>('input[type="tel"]');
    const nameValue = inputName !== null ? inputName.value : "";
    const emailValue = inputEmail !== null ? inputEmail.value : "";
    const telValue = inputTel !== null ? inputTel.value : "";
    if (nameValue === "") {
      setNameError("This field is required");
    }
    if (!(emailPattern.test(emailValue)) || emailValue == "") {
      setEmailError("Enter a Valid Email");
    }
    if (telValue == "") {
      setTelError("This field is required");
    }
    if(telValue!==""&& emailPattern.test(emailValue)&& nameValue!==""){
      const nexPageNumber = pageNumberValue +1;
      dispatch(pageState(nexPageNumber))
    }
  }

  return (
    <section className="personal">
      <div className="personal-content">
        <div className="headings-container">
          <Header {...{ title: "Personal info" }} />
          <SubHeading
            {...{
              title:
                "Please provide your name, email address, and phone number.",
            }}
          />
        </div>
        <form
          onSubmit={(e) => {
            submitPersonalForm(e);
          }}
        >
          <InputField
            {...{
              label: "Name",
              placeholder: "e.g. Stephen King",
              type: "text",
              name: nameError ? nameError : "",
            }}
          />
          <InputField
            {...{
              label: "Email Address",
              placeholder: "e.g. stephenking@lorem.com",
              type: "email",
              email: emailError ? emailError : "",
            }}
          />
          <InputField
            {...{
              label: "Phone Number",
              placeholder: "e.g. +1 234 567 890",
              type: "tel",
              tel: telError !== "" ? telError : "",
            }}
          />
          <div className="button-container">
          <Button  {...{text:"Next Page", name:"next-button"}}/>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Personal;
