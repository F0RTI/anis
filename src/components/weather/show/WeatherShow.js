import React from 'react'

// let AboutUser = require('../users/About.user');
// let language = AboutUser.infoText.language;
let language = 'ru';

let textApp = {
    aboutApp: {
        en: 'Component with weather information',
        ru: 'Компонент с погодной информацией'
    }
}

class Weather extends React.Component {
    render() {
        return (
            <div>
                <div>
                <p>{textApp.aboutApp[language]}</p>
                <p>{this.props.temp}</p>
                <p>{this.props.city}, {this.props.country}</p>
                <p>{this.props.pressure}</p>
                <p>{this.props.sunset}</p>
                <p>{this.props.error}</p>
                </div>
            </div>
        );
    }
}

export default Weather;
