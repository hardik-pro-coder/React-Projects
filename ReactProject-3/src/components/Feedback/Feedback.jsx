import React from 'react'
import './Feedback.css'
import profile_icon from '../../assets/img-8.webp'

const Feedback = () => {
    return (
        <div className='feedback container'>
            <h2>What people say</h2>
            <p className='para'>"We are using Turf Assistant to help our agronomic operation across multiple facilities. From the ground up, it allows us to complete a plan that meets the needs of our customer and then hand it over to our professionals in the field to execute. The data created is critical to help us to continually improve for both turf management and for budget. Our course that implemented the program on the first of the year has been able managed labor to within sixty hours of budget year-to-date. That is really impressive!"</p>
            <img src={profile_icon} alt="" />
            <p className='profile-name'>Kevin Sullivan, Director of Agronomy</p>
        </div>
    )
}

export default Feedback