import { useState } from "react"

export default function Login() {
    const [[error, errorMessage], setError] = useState([false, ''])
    const [[email, password], setUser] = useState(['', ''])

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        
        console.log('loggin in')
        console.log(email, password)
        const res = await fetch('http://localhost:4000/user/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        const result = await res.json()
        if(result.error){
            setError([true, result.error])
            
        } else if(result.code === 200){
            window.location.href = '/dashboard'
        }
        console.log(result)

    }
    return (<>
        <form className="flex flex-col gap-2" onSubmit={handleLogin}>
            <div>
            <label htmlFor="email">email</label>
            <input autoComplete="off" name="email" type="text" value={email} onChange={e => setUser([e.target.value, password])} />
            </div>
            <div>
                <label htmlFor="password">passowrd</label>
            <input autoComplete="off" name="password" type="password" value={password} onChange={e => setUser([email, e.target.value])} />
            </div>
            
            <button type="submit">Login</button>
        </form>
        {error && <p className="text-red-500"> {errorMessage} </p>}
    </>)
}