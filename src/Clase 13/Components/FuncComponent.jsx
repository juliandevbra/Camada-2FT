import React, { useState } from 'react'
const FuncComponent = () =>{
    const [user, setUser] = React.useState({
        name: 'Vicky', 
        count: 0
    })

    React.useEffect(() => {
        console.log('Esto se ejecuta una sola vez')


    }, [])


    React.useEffect(() => {
        console.log('Esto se ejecuta cuando user se actualiza')

        //Comparación con component will unmount
        return () => {
            console.log('Esto se ejecuta cuando el componente se desmonta')
        }
    }, [user])

    return <div>
        <h1>Function Component</h1>
        <h2>{user.count}</h2>
        <button onClick={() => setUser({...user, count : user.count+1})}>Sumar al contador</button>
        <button onClick={() => setUser({...user, count: user.count-1})}>Restar al contador</button>
        <h2>{user.name}</h2>
        <button onClick={() => setUser(prev => {
            return {...prev, count: prev.count, name: 'Manuel'}
        })}>Mi nombre no es vicky</button>
        </div>
}

export default FuncComponent
