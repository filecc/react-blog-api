import { useState } from "react"


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function fieldError(field: string, fields: any) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return fields.find((item: any) => item.field === field).message;
    } catch (error) {
      return false;
    }
  }

export default function AddPost(){
    const [[error, fields], setError] = useState([false, []])
    const [published, setPublished] = useState(false)
    

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleAdd = async (e: any) => {
        setError([false, []])
        e.preventDefault()
        console.log('adding post')
        const { title, content, category, tags } = e.currentTarget
        const postData = {
            title: title.value,
            content: content.value,
            published: published ? true : false,
            category: category.value,
            tags: tags.value.split(',')
        }
    
        
        const res = await fetch('http://localhost:4000/api/post', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...postData})
        })
        const result = await res.json()
        if(result.error){
            setError([true, result.messages])
        }
        console.log(result)
       
    }
    return (<>
         <div className="flex items-center justify-between">
          <h1>Add post</h1>
          <a href="/dashboard">Dashboard</a>
        </div>

        <form className="flex flex-col gap-2" onSubmit={handleAdd}> 
            <div>
                <label htmlFor="title">Title</label>
                <input className="block py-2 border border-gray-200" type="text" name="title" required />
                {(error && fieldError('title', fields)) && <p className="text-red-500"> {fieldError('title', fields)} </p>}
            </div>
            <div>
                <label htmlFor="content">Content</label>
                <input className="block py-2 border border-gray-200" type="text" name="content" required />
                {(error && fieldError('content', fields)) && <p className="text-red-500"> {fieldError('content', fields)} </p>}
            </div>
            <div>
                <label htmlFor="published">Published?</label>
                <input checked={published} onChange={(e) => setPublished(e.target.checked)} type="checkbox" name="published" required />
                {(error && fieldError('published', fields)) && <p className="text-red-500"> {fieldError('published', fields)} </p>}
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <input className="block py-2 border border-gray-200" type="text" name="category" />
                {(error && fieldError('category', fields)) && <p className="text-red-500"> {fieldError('category', fields)} </p>}
            </div>
            <div>
                <label htmlFor="tags">Tags (comma separated)</label>
                <input className="block py-2 border border-gray-200" type="text" name="tags" />
                {(error && fieldError('tags', fields)) && <p className="text-red-500"> {fieldError('tags', fields)} </p>}
            </div>
            <div>
                <button type="submit">Add</button>
                
            </div>

        </form>
    </>)
}