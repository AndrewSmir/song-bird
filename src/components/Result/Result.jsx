import React from 'react'

const Result = (props) => {

    const {score, startNewGame} = props

    return (
        <>
            <div style={{textAlign: 'center'}}>
                <p>{score < 30 ? `Очень жаль! Вы набрали ${score} очков` : `Поздравляем с победой! Ваш счет ${score} очков`}</p>
                <p>Попробуем еще раз?</p>
            </div>
            <div onClick={()=>startNewGame()} className='button active'>Start new game</div>
        </>
    )


}

export default Result