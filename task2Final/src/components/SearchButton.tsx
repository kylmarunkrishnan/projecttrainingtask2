//import './style.css';

type searchButtonProps ={
    src :string,
    height? : number,
    width? : number
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; 
}
export const SearchButton= (props:searchButtonProps)=> {
    const {height=16 , width=16} = props
    return (
            <button onClick={props.onClick}> <img src ={props.src}  width={width} height={height} alt="" /></button>
    )

}