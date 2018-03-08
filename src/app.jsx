//importing presets

import React from 'react';
import ReactDOM from 'react-dom';
require('./scss/main.scss');

//importing components
import MainComponent from "./js/main-component.jsx";

ReactDOM.render(
    <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <MainComponent/>
    </div>,
    document.getElementById("app")
);