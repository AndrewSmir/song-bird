import React from 'react'
import {connect} from "react-redux";
import Footer from "./Footer";
import {setNewLevel, setScore} from "../../redux/control-reducer";

const FooterContainer = (props) => {
    return (
        <Footer {...props}/>
    )
}

const mapStateToProps = (state) => {
    return {
        result: state.controlReducer.result,
        numberOfTry: state.controlReducer.currentNumberOfTrys
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setNewLevel(){
            dispatch(setNewLevel())
        },
        setScore(numberOfTry){
            dispatch(setScore(numberOfTry))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer)