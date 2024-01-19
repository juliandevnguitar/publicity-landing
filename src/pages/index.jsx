import React from 'react'
import { Link } from 'react-router-dom'

function Index() {
  return (
    <main>
            <section className="hero main-grid">
                <h1 className="hero-title">The only marketing agency on <span className="accent-color">a mission from God</span>, fully dedicated to increase your web traffic. </h1>
                <p className="hero-subtitle">We’re two brothers from Chicago that are trying to pay back our debt. We can help you with <strong>SEO, SEM content marketing</strong> and whatever else.</p>
                <Link to="/contact" className="btn btn-primary">contact</Link>
            </section>
        
            <section className="info main-grid">
                <div className="col">
                    <h2 className="section-title section-title-center">About Us</h2>
                    <p>We grew up in downtown Chicago, and we used to play in a band. <strong>Jake loves fried chicken</strong>, and <strong>Elwood loves dry white toast</strong>.</p>
                </div>
                <div className="col">
                    <h2 className="section-title section-title-center">Our skills</h2>
                    <p>Elwood is an expert in <strong>SEO, SEM, and driving from the police</strong>. Jake is our <strong>social media specialist</strong>, and he has an amazing voice.</p>
                </div>
                <div className="col">
                    <h2 className="section-title section-title-center">Get in touch</h2>
                    <p>Send us an email with some info about what help you need and <strong>we’ll drive over to your place</strong> in our Bluesmobile the following day to discuss the deal.</p>
                </div>
            </section>
        
        </main>
  )
}

export default Index