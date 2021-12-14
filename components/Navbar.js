import Link from "next/link"
import {useState, useEffect} from 'react'
const Navbar = () => {

const [closed, setOpen] = useState(true);
const handleClick = () => {
        setOpen(!true);
        console.log(closed)
        };
        
    return ( 
    <> <div onClick={()=>handleClick()} className="nav">
        <span className="navigation__open"></span>
        </div>
        
        <ul className={`${ setOpen ?'navigation__list':'navigation__list-closed'}`}>
        <span className="navigation__close"></span>
            <li className='b-orange'>
                <Link href="/" passHref>
                    <span className='uppercase c-white navigation__logo'>Karhamba</span>
                </Link>
            </li>
            <li className='b-black'>
                <Link href="/">
                    <a className='uppercase c-white'>home</a>
                </Link>
            </li>
            <li className='b-white'>
                <Link href="/">
                    <a className='uppercase c-orange'>about</a>
                </Link>
            </li>
            <li className='b-black'>
                <Link href="/">
                    <a className='uppercase c-white'>projects</a>
                </Link>
            </li>
            <li className='b-white'>
                <Link href="/">
                    <a className='uppercase c-orange '>contact</a>
                </Link>
            </li>
        </ul> 
        <ul className='navigation__list-MD'>
            <li>
                <Link href='/'>
                <a className='selected_link'>Home</a>
                </Link>
            </li>
            <li>
                <Link href='/about'>
                <a className='selected_link'>About</a>
                </Link>
            </li>
            <li>
                <Link href='/projects'>
                <a className='selected_link'>Projects</a>
                </Link>
            </li>
            <li>
                <Link href='/contact'>
                <a className='selected_link'>Contact</a>
                </Link>
            </li>
        </ul>
    </>
    )
}

export default Navbar