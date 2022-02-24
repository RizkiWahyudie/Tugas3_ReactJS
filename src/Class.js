import React, { Component } from "react";

class Class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isi : "Ini adalah isi dari state"
        }
        this.TryClass = this.TryClass.bind(this);
    }

    TryClass () {
        alert (this.state.isi)
    }

    render() {
        return (
            <a href="/" onClick={this.TryClass}>Pencet Class</a>
        );
    }
}

export default Class;