import React, {useState} from 'react'
import ReactAudioPlayer from "react-audio-player";

const AudioPlayer = (props) => {

    return (
        <ReactAudioPlayer
            src={props.src}
            controls
            style={{width: '100%', minWidth:'260px'}}
        />
    )
}

export default AudioPlayer