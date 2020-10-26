import React from 'react'

const Footer = (props) => {
    const {result, setNewLevel, setScore, numberOfTry} = props
    const newLevel = (numberOfTry) => {
        setNewLevel()
        const score = 5 - numberOfTry
        setScore(score)
    }

    return (
        <button disabled={!result} onClick={() => newLevel(numberOfTry)} className={!result ? `button` : `button active`}>Next
            level</button>
    )
}

export default Footer