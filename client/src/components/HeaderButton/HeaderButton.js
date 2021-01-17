import React from 'react'
import "./HeaderButton.scss";

const HeaderButton = ({text}) => {
    return (
        <button className="header__button">{text}</button>
    )
}

export default HeaderButton;