import React, { useState } from 'react'

const LSexample = () => {
    const [user, setUser] = useState({
        name: 'Pablo',
        email: 'pablo-gimenez@gmail.com',
        type: 'standard',
        score: 96
    })
    localStorage.setItem('user', JSON.stringify(user))
  return (
    <div>LSexample</div>
  )
}

export default LSexample