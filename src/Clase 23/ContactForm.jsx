import React, { useState } from 'react'
import useInput from './useInput'

const ContactForm = () => {
  const name = useInput('text', 'name')
  const lastName = useInput('text', 'lastName')
  const email = useInput('email', 'email')
  const password = useInput('password', 'password')

  return (
    <div>
        <form action="">
            <label>Name</label>
            <input {...name}/>
            <label>Lastname</label>
            <input {...lastName}/>
            <label>Email</label>
            <input {...email}/>
            <label>Password</label>
            <input {...password}/>
        </form>
        <p>{name.value}</p>
        <p>{lastName.value}</p>
        <p>{email.value}</p>
        <p>{password.value}</p>
    </div>
  )
}

export default ContactForm