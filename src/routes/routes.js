const React = require('react');
const { BrowserRouter, Switch, Route } = require('react-router-dom');
const {loggin} = require('./loggin');


function Routes() {
    return (
        <BrowserRoute>
            <switch>
                <Route exact path="/" component={loggin}/>
            </switch>
        </BrowserRoute>
    )  
}