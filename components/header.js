import Head from 'next/head'
import Link from 'next/link'
import Navbar from './Navbar'
const Header = () => {
    return (
        <header>
            <Head>
                <link href="http://fonts.googleapis.com/css2?family=Playfair+Display&family=Poppins:wght@400;500;600;700&display=swap"
                rel="stylesheet"/>
            </Head>
            <div className="heading">
                <div className="logo ">
                    Karhamba
                </div>
                <Navbar className=""/>
            </div>
        </header>
    )
}

export default Header
