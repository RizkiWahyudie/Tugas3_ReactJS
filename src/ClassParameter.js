import React, { Component } from "react";

class ClassParameter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isi : "Ini adalah isi dari state"
        }
    }

    TryParameter (value) {
        alert(value)
    }

    render() {
        return (
            <div>
                <a href="/" onClick={() => this.TryParameter("Ini adalah class parameter")}>Pencet Class Parameter</a>
            </div>
        );
    }
}

export default ClassParameter;