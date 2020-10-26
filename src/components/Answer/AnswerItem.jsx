import React, {useEffect, useState} from 'react'

const AnswerItem = (props) => {

    const {setAnswer, setLevelResult, question, id, result, currentLevel, setNumberOfTry, currentNumberOfTrys} = props
    const [isTouched, setIsTouched] = useState(false)

    useEffect(() => {
        setIsTouched(false)
    }, [currentLevel])

    const answer = (id) => {
        setAnswer(id)
        if (!result && !isTouched) {
            setIsTouched(true)
            setNumberOfTry(currentNumberOfTrys + 1)
        }
        if (id === question) {
            setLevelResult()
            setNumberOfTry(currentNumberOfTrys)
        }
    }

    let style = {}

    if (id === question) {
        style = {backgroundColor: '#00bc8c'}
    } else {
        style = {backgroundColor: '#d62c1a'}
    }

    return (
        <div className='birdItem' onClick={() => answer(id)}>
            <span className='answerBtn' style={isTouched ? style : null}></span>
            <span>{props.bird}</span>
        </div>
    )
}

export default AnswerItem