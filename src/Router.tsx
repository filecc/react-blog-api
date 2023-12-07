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
  if(page != '/'){
    middleware()
  }
  
  if (page.endsWith('/')) {
    content = <Home isLogged={isLogged} />;
  } else if (page.endsWith('/login')) {
    content = <Login />
  } else if (page.endsWith('/dashboard')) {
    content = <Dashboard />
  } else if(page.endsWith('/dashboard/create')){
    content = <AddPost />
  }
  
  
  else {
    content = <div>404 - Not Found - <a href="/">go home</a></div>;
  }

  return <>{content}</>;
}
