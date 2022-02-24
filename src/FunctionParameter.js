import React from "react";

const FunctionParameter = () => {
    function TryParameter (value, e) {
        e.preventDefault();
        alert(value)
    }
    return (
        <div>
            <a href="/" onClick={(e) => TryParameter ("Ini adalah function parameter", e)}>Pencet Function Parameterr</a>
        </div>
    );
}

export default FunctionParameter;