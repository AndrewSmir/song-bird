import React from 'react'
import {connect} from "react-redux";
import AnswerList from "./AnswerList";
import AnswerDescription from "./AnswerDescription";
import {setAnswer, setLevelResult, setNumberOfTrys} from "../../redux/control-reducer";


const AnswerContainer = (props) => {

    const {currentLevel, answer, birdsData, setNumberOfTry, currentNumberOfTrys, ...restProps} = props
    const birdsLevelData = birdsData[currentLevel]

    return (
        <div className='answerContainer'>
            <div className={`birdsList rounded`}>
                <AnswerList birdsData={birdsLevelData} currentLevel={currentLevel} setNumberOfTry={setNumberOfTry} currentNumberOfTrys={currentNumberOfTrys} {...restProps}/>
            </div>
            <AnswerDescription birdsData={birdsLevelData} answer={answer} {...restProps}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentLevel: state.controlReducer.currentLevel,
        answer: state.controlReducer.answer,
        question: state.controlReducer.question,
        birdsData: state.contentReducer.birdsData,
        result: state.controlReducer.result,
        currentNumberOfTrys: state.controlReducer.currentNumberOfTrys
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAnswer(answer){
            dispatch(setAnswer(answer))
        },
        setLevelResult(){
            dispatch(setLevelResult())
        },
        setNumberOfTry(number){
            dispatch(setNumberOfTrys(number))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerContainer)