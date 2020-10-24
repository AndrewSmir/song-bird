import React from "react"
import {Provider} from "react-redux";
import store from "./redux/store";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
    return (
        <Provider store={store}>
            <div className="container">
                <HeaderContainer/>
                <div>content</div>
                <div>footer</div>
            </div>
        </Provider>
    );
}

export default App;
