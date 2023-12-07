function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

export default function Navbar({ isLogged }: { isLogged: boolean}){
    const path = window.location.pathname

    const links  = [
        {
            name: 'Home',
            path: '/',
            active: path === '/',
            visible: true
        },
        {
            name: 'Login',
            path: '/login',
            active: path === '/login',
            visible: !isLogged
        },
        {
            name: 'Dashboard',
            path: '/dashboard',
            active: path === '/dashboard',
            visible: isLogged
        },
        {
            name: 'Logout',
            path: '/logout',
            active: path === '/logout',
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
                        link.active ? 'text-blue-500 font-medium' : '',
                        'hover:text-blue-500'
                    )} href={link.path}>{link.name}</a>
                }
            
            })}
        </div>
    </nav>
    </>
}