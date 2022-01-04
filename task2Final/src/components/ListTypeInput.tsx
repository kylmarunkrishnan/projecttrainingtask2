type  listTypeInputProps ={
    label:string,
    data:string[]
}

export const ListTypeInput =(props:listTypeInputProps)=>{
    return(
        <div className="selectdiv">
           {props.label}<select>
           {props.data.map((ele:string)=> <option value={ele}>{ele}</option>)}
            </select>
        </div>

    )}