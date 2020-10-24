import React from "react"
import {Provider} from "react-redux";
import store from "./redux/store";
import HeaderContainer from "./components/Header/HeaderContainer";
import QuestionContainer from "./components/Question/QuestionContainer";

function App() {
    return (
        <Provider store={store}>
            <div className="container">
                <HeaderContainer/>
                <QuestionContainer/>
                <div>footer</div>
            </div>
        </Provider>
    );
}

export default App;
