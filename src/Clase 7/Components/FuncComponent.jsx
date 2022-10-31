import React from 'react'
const FuncComponent = () =>{
    const [user, setUser] = React.useState({
        name: 'Vicky', 
        count: 0
    })

    return <div>
        <h1>Function Component</h1>
        <h2>{user.count}</h2>
        <button onClick={() => setUser({...user, count : user.count+1})}>Sumar al contador</button>
        <button onClick={() => setUser({...user, count: user.count-1})}>Restar al contador</button>
        {console.log(user)}
        <h2>{user.name}</h2>
        <button onClick={() => setUser({count: 0, name: 'Julian'})}>Mi nombre no es vicky</button>
        </div>
}

export default FuncComponent
