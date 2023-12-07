import { useEffect, useState } from "react"
import { Post } from "../lib/types/Post.types"
import Article from "./Article"

export default function Home(){
    const [ posts, setPosts ] = useState<Post[]>([])
    const [ reload, setReload ] = useState(true)
    useEffect(() => {
        if(!reload) return
        const getPosts = async () => {
          const res = await fetch('http://localhost:4000/api/posts')
          const result = await res.json()
          if(result){
            setPosts(result)
            setReload(false)
          }
        }
        
        getPosts()
      }, [reload])
      
    return (<>
    <div>
        {posts.map((post) => {
          return (<div key={post.id}>
           <Article post={post} />
          </div>)
        })}
      </div>
    </>)
}