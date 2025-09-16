import React from 'react'
import './Footer.css'
import footer_img from '../../assets/footer-img.png'
import chat from '../../assets/chat.jpg'

const Footer = () => {
    return (
        <>
            <div className='footer container'>
                <div className="footer-icon">
                    <i className="fa-brands fa-square-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-square-x-twitter"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <div className="footer-icon-text">
                        <p>Help & Support</p>
                        <a>hello@turfassistant.com</a>
                        <p><i className="fa-solid fa-mug-saucer"></i> Schedule A Demo</p>
                    </div>
                </div>

                <div className="footer-links">
                    <p style={{ color: "#565656" }}>Quick Links</p>
                    <p>Who is this for</p>
                    <p>Plans</p>
                    <p>About Us</p>
                    <p>Blog</p>
                    <p>Login</p>
                </div>

                <div className="footer-blog">
                    <p style={{ color: "#565656" }}>Recent Blog</p>
                    <p>Utility Vehicles Safety</p>
                    <p>Sun Protection</p>
                    <p>Safe Mover Operation</p>
                </div>

                <div className="footer-portal">
                    <p>Privacy Portal</p>
                    <div className="footer-img">
                        <img src={footer_img} alt="" />
                    </div>
                </div>
            </div>
            <div className='terms'>
                <p className='para'>@2023 Turf Assistant. All Rights Reserved</p>
                <img className='mungo' src={chat} alt="" />
            </div>
        </>
    )
}

export default Footer
