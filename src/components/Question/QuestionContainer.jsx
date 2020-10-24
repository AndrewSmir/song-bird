import React from 'react'
import {connect} from "react-redux";
import Question from "./Question";

const QuestionContainer = (props) => {

    const {birdsData, currentLevel, ...restProps} = props

    const birdsLevelData = birdsData[currentLevel]

    return (
        <>
            <Question birdsLevelData={birdsLevelData} {...restProps}/>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        currentLevel: state.controlReducer.currentLevel,
        birdsData: state.contentReducer.birdsData,
        isTouched: state.controlReducer.isTouched
    }
}

const mapDispatchToProps = (dispatch) => {
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer)