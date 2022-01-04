import React from "react";
//import "./Button.css";

type ButtonProps= { 
  header:string,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; 
  footer:string;
}

const Button: React.FC<ButtonProps> = ({ header,onClick,footer}) => { 
  return (
    <button className="button" onClick={onClick}>
    {header} <div className="text">{footer}</div>    
    </button>
  );
}

export default Button;

