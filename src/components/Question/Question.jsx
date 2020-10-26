import React, {useEffect, useState} from 'react'
import img from '../../assets/img/bird.06a46938.jpg'
import AudioPlayer from "../AudioPlayer/AudioPlayer";

const Question = (props) => {
    const [src, setSrc] = useState('')
    const [askedBird, setAskedBird] = useState('')
    const {birdsLevelData, question, result} = props

    useEffect(()=>{
        setAskedBird(birdsLevelData.find(bird => bird.id === question))
    })

    useEffect(()=>{
        if (askedBird){
            setSrc(askedBird.audio)
        }
    }, [askedBird])

    return (
        <div className={`content__question rounded`}>
            <div>
                <img src={!result ? img : askedBird.image} alt="BirdImage"/>
            </div>
            <div className='content__audio'>
                <div>
                    <span>{!result ? '******' : askedBird.name}</span>
                </div>
                <AudioPlayer src={src}/>
            </div>
        </div>
    )
}

export default Question