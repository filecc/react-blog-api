import { useEffect, useState } from "react"
import { Post } from "../lib/types/Post.types"
import Article from "./Article"

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
        
        <div className="py-3 flex items-center justify-between">
        <h1 className="font-bold">Blog</h1>
            {isLogged 
            ? <button onClick={() => window.location.href = '/dashboard'}>Dashboard</button>
            : <button onClick={() => window.location.href = '/login'}>Login</button>}
        </div>
        {posts.map((post) => {
          return (<div key={post.id}>
           <Article post={post} />
          </div>)
        })}
      </div>
    </>)
}