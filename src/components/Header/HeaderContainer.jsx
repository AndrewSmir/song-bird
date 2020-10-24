import React from "react"
import {connect} from "react-redux";
import Header from "./Header";

const HeaderContainer = (props) => {
    return (
        <>
            <Header {...props}/>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        score: state.headerReducer.score,
        birdsList: state.headerReducer.birdsList,
        currentLevel: state.controlReducer.currentLevel
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)