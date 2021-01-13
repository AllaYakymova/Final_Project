import React, { useState, useEffect } from 'react';
import AppRoutes from './routers/AppRouters'

function App () {
  const [prods, setProds] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((response) => {
        return response.json()
      })
      .then((res) => {
        setProds(res)
        console.log('res', res)
      })
  }, [])

  return (
    <div className="App">
      <AppRoutes prods={prods}/>
    </div>
  );
}

export default App;
