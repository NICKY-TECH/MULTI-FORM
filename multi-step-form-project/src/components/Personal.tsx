import "../styles/destination.css";
import { Header, SubHeading, InputField, Button } from "../index";

function Personal() {
  return (
    <section className="personal">
      <div className="personal-content">
       <div className="headings-container">
       <Header {...{ title: "Personal info" }} />
        <SubHeading
          {...{
            title: "Please provide your name, email address, and phone number.",
          }}
        />
       </div>
        <form>
          <InputField
            {...{ label: "Name", placeholder: "  e.g. Stephen King" }}
          />
          <InputField
            {...{
              label: "Email Address",
              placeholder: "e.g. stephenking@lorem.com",
            }}
          />
          <InputField
            {...{ label: "Phone Number", placeholder: "  e.g. +1 234 567 890" }}
          />
        </form>
        <div className="button-container">
          <Button text="Next Step"/>
        </div>
      </div>
    </section>
  );
}

export default Personal;
