export const checkLogin = async () => {
    const res = await fetch('http://localhost:4000/user/isLogged', {
        method: 'GET',
        credentials: 'include'
    })
    const result = await res.json()
    if(result.code != 200){
        return false
    }
    return true
    
}

