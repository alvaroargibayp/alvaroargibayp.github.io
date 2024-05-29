import React from "react";
import './CustomButton.css';

function CustomButton({ label = 'CustomButton' }) {
    return (
        <a className="custom-button">{label}</a>
    );
}

export default CustomButton;