import React from 'react'

function Footer() {
  return (
    <footer className="footer main-grid">
            <div className="footer-main">
                <img src="img/logo.png" alt="" className="footer-logo"/>
                <p className="footer-text">Two brothers from Chicago that are just trying to pay back their debt by helping others with their SEO, SEM, and Content Marketing needs.</p>
                <p className="footer-fineprint">© Jake&Elwood 2019</p>
            </div>
            <ul className="social-list">
                <li className="social-item"><a href="#" className="social-link"><i className="fab fa-facebook-square"></i></a></li>
                <li className="social-item"><a href="#" className="social-link"><i className="fab fa-twitter"></i></a></li>
                <li className="social-item"><a href="#" className="social-link"><i className="fab fa-instagram"></i></a></li>
            </ul>
        </footer>
  )
}

export default Footer