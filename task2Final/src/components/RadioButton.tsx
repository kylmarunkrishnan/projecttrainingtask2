//import './RadioButton.css';

type RadioButtonProps = {
    label:JSX.Element;
    value:string;
    group: string;
    id:string;
}

export function getUnderlined(key : string,value: string){
    let result = value.replace(key, '<u>' + key + '</u>')
    return ( <div dangerouslySetInnerHTML={{
        __html: result
    }} />)
}

export const RadioButton = (props:RadioButtonProps) => {
    return (
        <div className="radio">
            <input type="radio" id="props.id" name={props.group} value={props.value}/>
            <label htmlFor="props.id">{props.label}</label>
        </div>
    );
};