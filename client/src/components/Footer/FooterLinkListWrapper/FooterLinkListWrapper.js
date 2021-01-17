import React from 'react';
import FooterButton from '../FooterButton/FooterButton';
import FooterLinkList from '../FooterLinkList/FooterLinkList'

const FooterLinkListWrapper = (data) =>{
    return (        
        <div className="footer__link-block">
            <h3 className="footer__link-block__header">{data.data.header}</h3>
            <FooterButton text={data.data.header}/>
            <FooterLinkList data={data.data.links}/>
        </div>
    )
}

export default FooterLinkListWrapper;