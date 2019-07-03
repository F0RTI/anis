import React from 'react'

let textApp = {
    aboutTheWeather: {
        en: 'About the weather in your city',
        ru: 'О погоде в вашем городе'
    },
   weatherApp: {
        en: 'Weather app',
        ru: 'Погодное приложение'
    },
}

class Info extends React.Component {
    render() {
        const lang = this.props.lang;
        return (
            <div>
                <h1>{textApp.weatherApp[lang]}</h1>
                <h2>{textApp.aboutTheWeather[lang]}</h2>                
            </div>
        );
    }
}

export default Info;
