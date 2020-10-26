import React from "react"
import {connect, Provider} from "react-redux";
import store from "./redux/store";
import HeaderContainer from "./components/Header/HeaderContainer";
import QuestionContainer from "./components/Question/QuestionContainer";
import AnswerContainer from "./components/Answer/AnswerContainer";
import FooterContainer from "./components/Footer/FooterContainer";
import ResultContainer from "./components/Result/ResultContainer";

function App(props) {

    const {currentLevel} = props

    return (
        <div className="container">
            {currentLevel === 6 ?
                <ResultContainer/> :
                <>
                    <HeaderContainer/>
                    <QuestionContainer/>
                    <AnswerContainer/>
                    <FooterContainer/>
                </>
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        currentLevel: state.controlReducer.currentLevel
    }
}

const ConnectedApp = connect(mapStateToProps, {})(App)

export const MainApp = () => {
    return (
        <Provider store={store}>
            <ConnectedApp/>
        </Provider>
    )
}
