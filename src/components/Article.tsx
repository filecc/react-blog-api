import { Post } from "../lib/types/Post.types";

export default function Article({ post }: {post: Post}){
    return <>
    <a href={'/blog/'+post.slug}><h2 className="text-2xl font-semibold">{post.title}</h2></a>
    <img src={post.image} alt={post.title + ' image'} />
    <p>{post.content.slice(0, 100) + '...'}</p>
    </>
}