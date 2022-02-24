import React from "react";

const Function = () => {
    function TryFunction (e){
        e.preventDefault();
        alert('Hallo')
    }
    return (
        <a href="/" onClick={TryFunction}>Pencet</a>
    );
}

export default Function;