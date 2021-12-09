import Link from "next/link"

const Navbar = () => {
    return ( 
    <> 
        <span className="navigation__open"></span>
        <span className="navigation__closed"></span>
        <ul className='navigation__list'>
        <span className="navigation__close"></span>
            <li className='b-orange'>
                <Link href="/" passHref>
                    <span className='uppercase c-white navigation__logo'>Karhamba</span>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a className='uppercase c-white'>home</a>
                </Link>
            </li>
            <li className='b-white'>
                <Link href="/">
                    <a className='uppercase c-orange'>about</a>
                </Link>
            </li>
            <li >
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
    </>
    )
}

export default Navbar