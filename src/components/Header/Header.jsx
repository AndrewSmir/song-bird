import React from "react"
import logo from "../../assets/img/logo.svg"

const Header = (props) => {
    const {score, birdsList, currentLevel} = props
    const level = currentLevel

    return (
        <div className="header">
            <div className="header__top">
                <img src={logo} alt="logo"/>
                <div>
                    <span>Score: {score}</span>
                </div>
            </div>
            <div className="header__bot">
                <ul>
                    {birdsList.map((bird, index) => <li key={index}
                                                        style={level === index ? {backgroundColor: '#007c5d'} : null}>
                        {bird}
                    </li>)}
                </ul>
            </div>
        </div>
    )
}

export default Header