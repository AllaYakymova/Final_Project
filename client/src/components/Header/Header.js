import React from 'react';
import "./Header.scss"
import HeaderButton from "../HeaderButton/HeaderButton"
import Icon from '@material-ui/core/Icon';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';

const Header = () => {
    return (
        <div className="header container">
            <div className="header__goods-list">
                <div className="header__button-wrapper">
                    <HeaderButton text="man"/>
                </div>
                <div className="header__button-wrapper">
                    <HeaderButton text="woman"/>
                </div>
                <div className="header__button-wrapper">
                    <HeaderButton text="accessory"/>
                </div>
            </div>
            <h1 className="header__shop-name">Originalité</h1>
            <div className="header__links">
                <div className="header__customer-links-wrapper">
                    <a href="#" className="header__customer-link">
                        <SearchOutlinedIcon fontSize="small"/>
                        <span className="header__customer-link-text">Search</span>
                    </a>
                </div>
                <div className="header__customer-links-wrapper">
                    <a href="#" className="header__customer-link">
                        <PersonOutlineOutlinedIcon fontSize="small"/>
                        <span className="header__customer-link-text">My Account</span>
                    </a>
                </div>
                <div className="header__customer-links-wrapper">
                    <a href="#" className="header__customer-link">
                        <ShoppingBasketOutlinedIcon fontSize="small"/>
                        <span className="header__customer-link-text">Shopping Bag</span>
                    </a>
                </div>
                <div className="header__customer-links-wrapper head-nav">
                    <button class="header__nav__button">
                        <span class="header__nav__button__decoration-short-line"></span>
                        <span class="header__nav__button__decoration-top-line"></span>
                        <span class="header__nav__button__decoration-bottom-line"></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;