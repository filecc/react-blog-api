import { useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddPost from "./components/AddPost";
import { checkLogin } from "./lib/utils/utils";


export default function Router() {
  const [page, setPage] = useState(window.location.href);
  const [isLogged, setIsLogged] = useState(false)

  function navigate(url: string) {
    setPage(url);
  }
  
  const middleware = async () => {
    const isLogged = await checkLogin()
    if(isLogged) setIsLogged(true)
    if(!isLogged) navigate('/login')
    return
  }
  let content;
 
  
  if (page.endsWith('/')) {
    content = <Home isLogged={isLogged} />;
  } else if (page.endsWith('/login')) {
    content = <Login />
  } else if (page.endsWith('/dashboard')) {
    middleware()
    content = <Dashboard />
  } else if(page.endsWith('/dashboard/create')){
    middleware()
    content = <AddPost />
  } else if(page.endsWith('/logout')){
    const logout = async () => {
      const res = await fetch('http://localhost:4000/user/logout', {
        credentials: 'include'
      })
      const result = await res.json()
      if (result.code === 200){
        window.location.href = '/'
      }
      else {
        window.location.href = '/error'
      }
      
    }
    logout()
  } else if (page.endsWith('/error')){
    content = <div>Something went wrong - <a href="/">go home</a></div>
  }
  else {
    content = <div>404 - Not Found - <a href="/">go home</a></div>;
  }

  return <>{content}</>;
}
