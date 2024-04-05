import React from "react";

const Button = ({ type ,className, btnText, action, icon =''}) => {
  return (
    <button 
    type={type || "button"}
    className={className} 
    onClick={action}>
      <span className="btn-text">{btnText}</span>
    </button>
  );
};

export default Button;
