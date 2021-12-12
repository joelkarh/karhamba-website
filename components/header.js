import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'
const Header = () => {
    return (
        <header className="container">
            <Head>
                <link href="http://fonts.googleapis.com/css2?family=Playfair+Display&family=Poppins:wght@400;500;600;700&display=swap"
                rel="stylesheet"/>
            </Head>
                <div className="logo ">
                    Karhamba
                </div>
                <Navbar className=""/>
        </header>
    )
}

export default Header
