import React from 'react'

function Contact() {
  return (
    <main className="main-template main-grid">
            
            <h1 className="page-title">Contact.</h1>
            <p className="subtitle">Let us know how we can help you need and we’ll drive over to your place in our Bluesmobile the following day to discuss the deal.</p>
            
            <img className="main-image" src="../contact.jpg" alt="a bunch of mailboxes"/>
            <div className="secondary-text">
                <h2 className="section-title">Getting in touch with us</h2>
                <p>You can either use the form or send us an email. I'll get back in touch with you as soon as possible!</p>
            </div>
                        
            <div className="main-text">
                <form className="contact-form" action="#" method="POST">
                    
                    <label className="fname-label" htmlFor="fname" >First Name</label>
                    <input className="fname-input" id="fname" type="text" />
                    
                    <label className="lname-label" htmlFor="lname">Last Name</label>
                    <input className="lname-input" id="lname" type="text" />
                    
                    <label className="message-label" htmlFor="message">Message</label>
                    <textarea className="message-textarea" id="message"></textarea>
                    
                    <button className="btn btn-primary btn-form">send</button>
                </form>
            </div>
            
        
    </main>
  )
}

export default Contact