
type searchBoxProps={
    size: number,
    onChange? :React.ChangeEventHandler<HTMLInputElement>
}
export const SearchBox = (props:searchBoxProps) => {
    return(
        <div>
            <input type="text" size={props.size} onChange={props.onChange}></input>
        </div>

    )
}

