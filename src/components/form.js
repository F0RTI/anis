import React from 'react'

class Form extends React.Component {
    render() {
        const lang = this.props.lang;

        return (
            <div>
                {/* <p>{textApp.aboutApp[lang]}</p> */}
                <form onSubmit={this.props.weatherMethod}>
                    <input type='text' name='city' placeholder='City'/>
                    <button>ffff</button>
                </form>
            </div>
        );
    }
}

export default Form;
