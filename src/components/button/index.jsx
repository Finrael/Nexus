import React from "react";

const Button = ({children, classN, key})=>{
    return(
        <button key={key} className={classN}>
            {children}
        </button>
    )
}
export default Button