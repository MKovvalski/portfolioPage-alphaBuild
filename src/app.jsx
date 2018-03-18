//importing presets

import React from 'react';
import ReactDOM from 'react-dom';
require('./scss/mobile.scss');

//importing components
import MainComponent from "./js/main-component.jsx";

document.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(
        <div>
            <MainComponent/>
        </div>,
        document.getElementById("app")
    );

});