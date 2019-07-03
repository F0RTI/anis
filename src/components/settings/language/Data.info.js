import React from 'react';
import Data from './App.settings.json';

// fetch('./App.settings.json')
//     .then((res) => res.json())
//     .then((data) => {
//         console.log('data:', data);
// });

// console.log(Data.SpecifiedLanguage);

class LanguageSet extends React.Component {
  render() {
    return (
      <div>Language</div>
    );
  }
}

let langName = Data.SpecifiedLanguage;

let data = require('./data/'+ langName +'.json');
console.log(data.settingsCity.addCity);

export default LanguageSet;
// exports.lang = data;