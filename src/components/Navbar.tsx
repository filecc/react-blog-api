import { useEffect, useState } from "react"
import { checkLogin } from "../lib/utils/utils"

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

export default function Navbar(){
    const path = window.location.pathname
    const [isLogged, setIsLogged] = useState(false)
    useEffect(() => {
        const getUserLoginInfo = async () => {
            const isLogged = await checkLogin()
            if(isLogged) setIsLogged(true)
            if(!isLogged) setIsLogged(false)
            return
          }
          getUserLoginInfo()
    }, [])

    const links  = [
        {
            name: 'Home',
            path: '/',
            visible: true
        },
        {
            name: 'Login',
            path: '/login',
            visible: !isLogged
        },
        {
            name: 'Dashboard',
            path: '/dashboard',
            visible: isLogged
        },
        {
            name: 'Logout',
            path: '/logout',
            visible: isLogged
        }
    ]
    return <>
    <nav className="flex justify-between items-center py-3 px-4">
        <h1 className="font-bold">Blog</h1>
        <div className="flex gap-2">
            {links.map((link) => {
                if(link.visible){
                    return <a key={link.name} className={classNames(
                        path === link.path ? 'text-blue-500 font-medium' : '',
                        'hover:text-blue-500'
                    )} href={link.path}>{link.name}</a>
                }
            
            })}
        </div>
    </nav>
    </>
}