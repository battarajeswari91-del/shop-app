import React from 'react';
function Button({ text, onClick, type = "button", className = "", children }) {
    return (
        <button
            type={type}
            className={className}
            onClick={onClick} >
            {children || text}
        </button>
    )
}
export default Button;