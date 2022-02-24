import React from "react";

const TopEvents = () => {
    const Function = (value, e) =>{
        e.preventDefault();
        alert(value)
    }

    return (
        <div>
            <a href="/" onClick={(e) => Function ("Ini adalah Tugas", e)}>Back To Home</a>
        </div>
    )
}

export default TopEvents;