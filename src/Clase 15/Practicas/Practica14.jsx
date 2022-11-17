import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Practica14 = () => {

    const [comments, setComments] = useState([])
    const [post, setPost] = useState({})


    const rootUrl = 'https://jsonplaceholder.typicode.com'

    useEffect(() => {
        axios.get(rootUrl + '/comments')
        .then(res => setComments(res.data))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios({
            method: 'post',
            url: rootUrl + '/posts',
            data: post
        })
        .then(res => console.log(res))
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>name</label>
            <input type="text" onChange={(e) => setPost({...post, name: e.target.value})}/>
            <label>body</label>
            <input type="text" onChange={(e) => setPost({...post, body: e.target.value})}/>
            <label>email</label>
            <input type="email" onChange={(e) => setPost({...post, email: e.target.value})}/>
            <label> ID</label>
            <input type="number" onChange={(e) => setPost({...post, id: e.target.value})}/>
            <label>post ID</label>
            <input type="number" onChange={(e) => setPost({...post, postId: e.target.value})}/>
            <button>Enviar</button>
        </form>
        {comments.map(comment => <li key={comment.id}>{comment.name}</li>)}
    </div>
  )
}

export default Practica14