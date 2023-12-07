import { useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";


export default function Router() {
  const [page, setPage] = useState(window.location.href);

  function navigate(url: string) {
    setPage(url);
  }
  console.log(page)
  let content;
  
  if (page.endsWith('/')) {
    content = <Home navigate={navigate} />;
  } else if (page.endsWith('/login')) {
    content = <Login />
  } else {
    content = <div>404 - Not Found - <a href="/">go home</a></div>;
  }

  return <>{content}</>;
}
