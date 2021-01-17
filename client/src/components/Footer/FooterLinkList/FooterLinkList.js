import React from 'react';
import FooterLink from "../FooterLink/FooterLink"

const FooterLinkList = (data) => {
    const links = data.data;
    return (
        <div className="footer__link-list">
                {links.map(e =>(<FooterLink data={e} key={e.data}/>))}
        </div>
    )
}

export default FooterLinkList;