import React from 'react'
import img from '../../assets/img/bird.06a46938.jpg'

const Question = (props) => {
    return (
        <div className={`content__question rounded`}>
            <div>
                <img src={img} alt="BirdImage"/>
            </div>
            <div className='content__audio'>
                <div>
                    <span>bird-name</span>
                </div>
                <div>
                    audio-player
                </div>
            </div>
        </div>
    )
}

export default Question