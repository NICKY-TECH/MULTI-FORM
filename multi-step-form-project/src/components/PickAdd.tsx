import "../styles/destination.css";
import { Header, SubHeading,PickItem,pickItemArray } from "..";
import { useAppSelector} from "../hooks/typedRedux";

function PickAdd(){
  const selectedPlan=useAppSelector((state) => state.planOption.value);

    return <section className="personal">
    <div className="select-plan-content">
      <div className="headings-container">
        <Header {...{ title: "Pick add-ons" }} />
        <SubHeading
          {...{
            title: "Add-ons help enhance your gaming experience.",
          }}
        />
      </div>
      <div className="pick-addons-container">
{
  pickItemArray.map((item,index)=>{
    return <>
    <PickItem {...{title:item.title, subtext:item.subtext, amount:selectedPlan==="Monthly"? item.amountMonthly: item.amountYearly}} key={index}/>
    </>
  })
}
      </div>
      </div>
      </section>
}

export default PickAdd