import React from 'react'
import Result from "./Result";
import {startNewGame} from "../../redux/control-reducer";
import {connect} from "react-redux";

const ResultContainer = (props) => {

    return (
        <Result {...props}/>
    )
}

const mapStateToProps = (state) => {
    return {
        score: state.controlReducer.score
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startNewGame(){
            dispatch(startNewGame())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultContainer)