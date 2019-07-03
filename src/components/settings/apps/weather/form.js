import React from 'react'

let textApp = {
    aboutApp: {
        en: 'Form component',
        ru: 'Компонент с формой'
    }
}

class Form extends React.Component {
    render() {
        const lang = this.props.lang;

        return (
            <div>
                <p>{textApp.aboutApp[lang]}</p>
                <form onSubmit={this.props.weatherMethod}>
                    <input type='text' name='city' placeholder='City'/>
                    <button>Получить погоду</button>
                </form>
            </div>
        );
    }
}

export default Form;
