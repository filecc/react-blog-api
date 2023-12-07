import { useEffect, useState } from "react"
import Article from "./Article"
import { Post } from "../lib/types/Post.types"

export default function SinglePost(){
    const slug = window.location.pathname.split('/')[2]
    const [post, setPost] = useState<Post>()
    
    useEffect(() => {
        const getPost = async () => {
            const res = await fetch('http://localhost:4000/api/post/' + slug)
            const result = await res.json()
            console.log(result)
            if(result.error){
                window.location.href = '/404'
            } else {
                setPost(result)
            }
        }
        getPost()
    }, [])
    return (<div>
        <a className="mb-6" href="/">back HOME</a>
        {post &&  <Article post={post} />}
       
    </div>)
}