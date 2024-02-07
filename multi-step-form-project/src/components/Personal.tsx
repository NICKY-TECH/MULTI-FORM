import "../styles/destination.css";
import { Header,SubHeading,Input } from "../index";

function Personal() {
  return (
    <section>
      <Header {...{ title: "Personal info" }} />
      <SubHeading {...{title:"Please provide your name, email address, and phone number."}}/>
      <form>
<Input {...{label:"Name",placeholder:"  e.g. Stephen King"}}/>
<Input {...{label:"Email Address",placeholder:"e.g. stephenking@lorem.com"}}/>
<Input {...{label:"Phone Number",placeholder:"  e.g. +1 234 567 890"}}/>
      </form>
    </section>
  );
}

export default Personal
