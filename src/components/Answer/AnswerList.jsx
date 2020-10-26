import React from 'react'
import AnswerItem from "./AnswerItem";

const AnswerList = (props) => {
    const {birdsData, ...restProps} = props

    const birdItem = birdsData.map(bird=>{
        return (
            <AnswerItem key={bird.id} bird={bird.name} id={bird.id} {...restProps}/>
        )
    })

    return (
        <>
            {birdItem}
        </>
    )
}

export default AnswerList