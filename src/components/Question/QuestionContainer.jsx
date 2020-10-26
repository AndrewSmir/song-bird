import React, {useEffect} from 'react'
import {connect} from "react-redux";
import Question from "./Question";
import {setQuestion} from "../../redux/control-reducer";

const QuestionContainer = (props) => {

    const {birdsData, currentLevel, setRandomQuestion, ...restProps} = props

    useEffect(() => {
        const question = Math.floor(1 + Math.random() * (6 + 1 - 1))
        setRandomQuestion(question)
    }, [currentLevel])

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
        question: state.controlReducer.question,
        result: state.controlReducer.result
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setRandomQuestion(question) {
            dispatch(setQuestion(question))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer)