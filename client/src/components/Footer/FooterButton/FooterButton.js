import React from 'react'
import "./Footer_button.scss";

const FooterButton = ({text}) => {
    return (
        <button className="footer__button bottom" onClick={(e)=>{    
            if(e.target.className === "footer__button bottom") {
                e.target.className = "footer__button top"
            } else {
                e.target.className = "footer__button bottom"
            }
            const target = e.target;
            const sibling = target.nextSibling;
            console.log(sibling.className)
            if(sibling.className === "footer__link-list-active") {
                sibling.className = "footer__link-list-hidden";
            } else (
                sibling.className = "footer__link-list-active"
            )}}>
                {text}</button>
    )

}

export default FooterButton;