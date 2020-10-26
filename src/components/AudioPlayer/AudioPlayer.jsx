import React, {useState} from 'react'
import ReactAudioPlayer from "react-audio-player";

const AudioPlayer = (props) => {

    return (
        <ReactAudioPlayer
            src={props.src}
            controls
            style={{width: '100%'}}
        />
    )
}

export default AudioPlayer