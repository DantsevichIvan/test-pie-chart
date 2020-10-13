import React from 'react';
import './App.css';
import DateEntryPage from "./Components/DateEntryPage";
import GraphPage from "./Components/GraphPage";
import Header from "./Components/Header";
import {Route, Switch} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path='/' component={DateEntryPage}/>
                <Route exact path='/graph' component={GraphPage}/>
            </Switch>
        </div>
    );
}

export default App;
