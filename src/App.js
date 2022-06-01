import React from "react";
import NavbarCom from "./components/NavbarCom/NavbarCom.js";
import ProductsCom from "./components/ProductsCom/ProductsCom.js";
import {Switch, Route} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <NavbarCom/>
            <Switch>
                <Route path="/products">
                    <ProductsCom/>
                </Route>
            </Switch>

        </div>
    );
}

export default App;
