import React from 'react';

const FooterLink = (data) => {
    return (
        <p className="footer__link"><a href="#">{data.data}</a></p>
    )
}
export default FooterLink;