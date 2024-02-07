function SideList(
 props:{step:number,title:string}){
return <ul>
    <li>
        <span>
     {props.step}
        </span>
        <ul>
            <li>
                Step{props.step}
            </li>
            <li>
{props.title}
            </li>
        </ul>
    
    </li>
</ul>
}

export default SideList