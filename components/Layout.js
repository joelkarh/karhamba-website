import Footer from "./footer"
import Header from "./header"
import Head from 'next/head'

const Layout = ({children}) => {
    return (
        <>
            <Header/>
                <main>
                    {children}
                </main>
            <Footer/>
        </>
    )
}

export default Layout
