import React, { Component } from "react";

class MenuTentangKami extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descP: "Warung Nusantara adalah warung yang bernuansa nusantara, Kami ada untuk anda menikmati Makanan Nusantara"
        }
    }
    render () {
        return (
            <div>
                <center>
                <p>Tentang Kami</p>
                {this.state.descP};
                </center>
            </div>
        )
    }
}

export default MenuTentangKami;