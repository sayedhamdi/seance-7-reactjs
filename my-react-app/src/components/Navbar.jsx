function Navbar(){
    let links = [{ href : '/home',text:'Home'}, { href : '/about',text:'About'}, { href : '/contact',text:'Contact'}]
    return (
        <ul>
            {links.map((link) => <li ><a href={link.href}>{link.text}</a></li>   
            )}
        </ul>
    )
}

function Navbar1(){
    let links = [{ href : '/home',text:'Home'}, { href : '/about',text:'About'}, { href : '/contact',text:'Contact'}]
    return (
        <ul>
            {links.map((link) => <li ><a href={link.href}>{link.text}</a></li>   
            )}
        </ul>
    )
}


export {
    Navbar,
    Navbar1
}