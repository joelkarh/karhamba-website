import Head from 'next/head'
import Image from 'next/image'
import my_logo from '../public/SVG.svg'
import Link from 'next/link'
import Navbar from './Navbar'
const Header = () => {
    return (
        <header className="container">
            <Head>
                <link href="http://fonts.googleapis.com/css2?family=Playfair+Display&family=Poppins:wght@400;500;600;700&display=swap"
                rel="stylesheet"/>
            </Head>
            <div className="row">
                <div className="col-md-6">
                    <div className="logo ">
                        <Image src={my_logo} alt="me" className="logo__image" />
                    </div>
                </div>
                <div className="col-md-6"> 
                <Navbar className=""/>
                </div>
            </div>
                
                    {/* Karhamba */}
        </header>
    )
}

export default Header
