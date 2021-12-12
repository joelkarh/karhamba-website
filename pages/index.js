import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import Image from 'next/image'
import Layout from '../components/Layout'



export default function Home() {
    return (
        <Layout>
            <div className="container home-container">
                <section className="row">
                    <article className="col-12 first_article">
                        <h1 id="pretitle">Development that makes you say...</h1>
                        {/* <h1>[ˈai kaˈɾamba]</h1> */}
                        <h2 className='uppercase'>Karhamba!</h2>
                        <h3>Full stack developer</h3>
                        <p>I am a self-taught <span className='fullstack'>Full stack</span> developer who can build your project. I love new challenges and to learn new skills.</p>
                        <div className="buttons">
                        <button className="button uppercase"> <Link href='/'>projects</Link> </button> 
                        <button className='no_button uppercase'>Let’s work together</button>
                        </div>
                    </article>
                    <div className="home_imageBox">
                        {/* prismic image rendered */}
                        
                            <Image src='/home_image.png' layout='fill' objectFit='contain'className='home_image' alt='home_image'/>
                    </div>
                </section>
            </div>
        </Layout>
    )
}
