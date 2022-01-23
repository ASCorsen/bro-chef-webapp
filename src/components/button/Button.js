import React from 'react';
import '../button/Button.css'

const Button = ({isDisabled, clickHandler, children}) => {
    return (
        <div>
            <button className="button-styling"
                    type="button"
                    disabled={isDisabled}
                    onClick={clickHandler}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;