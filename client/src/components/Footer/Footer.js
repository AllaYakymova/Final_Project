import React, { useState, useEffect } from 'react';
import './Footer.scss';
import FooterLinkListWrapper from "./FooterLinkListWrapper/FooterLinkListWrapper";
import axios from "axios";
import Header from "../components/Header/Header"

function App() {
    const [linkscollection, setlinkscollection] = useState([]);
    useEffect (() => {
        axios('./footer.json').then(res => setlinkscollection(res.data));
      }, []);  
      
  return (
    <>
    <Header />
    <div className="footer container">
        {linkscollection.map(e => (<FooterLinkListWrapper data={e} key={e.id}/>))}
    </div>
    </>
  );
}

export default App;
