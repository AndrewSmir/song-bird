import React, {useEffect, useState} from 'react'
import AudioPlayer from "../AudioPlayer/AudioPlayer";

const AnswerDescription = (props) => {
    const {birdsData, answer} = props
    const [src, setSrc] = useState('')
    const selectedBird = birdsData.find(bird => bird.id === answer)

    useEffect(()=>{
        if (selectedBird) {
            setSrc(selectedBird.audio)
        }
    }, [selectedBird])


    return (
        <div className={`birdDescription rounded`}>
            {answer === null ? (
                <div>
                    <p>Послушайте плеер</p>
                    <p>Выберите птицу</p>
                </div>) : (
                <>
                    <div className='birdDescription__top'>
                        <div>
                            <img src={selectedBird.image} alt="bird"/>
                        </div>
                        <div className='birdDescription__top__data'>
                            <div><span>{selectedBird.name}</span></div>
                            <div><span>{selectedBird.species}</span></div>
                            <AudioPlayer src={src}/>
                        </div>
                    </div>
                    <div>
                        {selectedBird.description}
                    </div>
                </>
            )
            }
        </div>
    )
}

export default AnswerDescription