import { useEffect, useState } from "react"
import { Post } from "../lib/types/Post.types"

export default function Home({ isLogged }: { isLogged: boolean }){
    const [ posts, setPosts ] = useState<Post[]>([])
    const [ reload, setReload ] = useState(true)
    useEffect(() => {
        if(!reload) return
        const getPosts = async () => {
          const res = await fetch('http://localhost:4000/api/posts')
          const result = await res.json()
          console.log(result)
          if(result){
            setPosts(result)
            setReload(false)
          }
        }
        
        getPosts()
      }, [reload])
      
    return (<>
    <div>
        <h1>Blog</h1>
        <div className="py-3 text-right">
            {isLogged 
            ? <button onClick={() => window.location.href = '/dashboard'}>Dashboard</button>
            : <button onClick={() => window.location.href = '/login'}>Login</button>}
        </div>
        {posts.map((post) => {
          return (<div key={post.id}>
            <h2>{post.title}</h2>
            <img src={post.image} alt={post.title + ' image'} />
            <p>{post.content.slice(0, 100) + '...'}</p>
          </div>)
        })}
      </div>
    </>)
}