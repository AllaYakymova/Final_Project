import React from 'react'
import AppRoutes from './routers/AppRouters'
import axios from 'axios'

function App () {
  const newCustomer = {
    firstName: 'Customer',
    lastName: 'Newone',
    login: 'Customer',
    email: 'customer@gmail.com',
    password: '1111111',
    telephone: '+380630000000',
    gender: 'male',
    avatarUrl: 'img/customers/023648.png',
    isAdmin: true,
    enabled: true,
  }

  const onSubmit = (data) => {
    console.log(data)
    // delete data.confirm
    // data.login = data.email
    // data.enabled = true
    // data.isAdmin = false
    // console.log(data)
    fetch('http://localhost:5000/api/customers', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).catch((err) => {
      console.log(err)
    })
  }

  onSubmit(newCustomer)

  return (
    <div className="App">
      <AppRoutes />
    </div>
  )
}

export default App
