import React from 'react'
import './Management.css'
import management_img1 from '../../assets/img-1.png'
import management_img2 from '../../assets/img-2.png'

const Management = () => {
    return (
        <div className='management'>
            <div className="labor-management">
                <div className="labor-management-text">
                    <h2>Labor Management</h2>
                    <p>Quickly and easily create and forecast your labor and application cost, staffing requirements and document your vision and standards for your facility. Once complete, Schedule Assistant will help you automate the day-to-day schedule and management of your staff, labor and application plans. As your staff executes your plan, Labor Assistant will build and compile labor reports so that you can compare plan versus actual and know where the labor hours and dollars were spent on the turf.</p>
                </div>
                <div className="labor-management-img">
                    <img src={management_img1} alt="" />
                </div>
            </div>
            <div className="labor-management">
                <div className="labor-management-img">
                    <img src={management_img2} alt="" />
                </div>
                <div className="labor-management-text">
                    <h2>Time and Performance Management</h2>
                    <p>Automate labor tracking and management into your labor plan with Time Assistant. With Turf Assistant’s proprietary A.P.E.x labor management algorithm you will be able to maximize your labor output across all your staff no matter if you are on property or not. Time Assistant is always on and always watching your labor operations to ensure peak performance of staff and collecting key performance metrics for you to pull up and analyze at a glance.</p>
                </div>
            </div>
            <div className="labor-management">
                <div className="labor-management-text">
                    <h2>Communications Management</h2>
                    <p>More than a digital whiteboard, your Turf Operations Hub is the glue that brings it all together. Whether it is scheduling daily tasks or equipment maintenance, the Turf Operations Hub is the key to automating your labor management through Time Assistant. With integrated Time Assistant metrics, your Turf Operations Hub will display realtime labor performance stats across your entire organization.</p>
                </div>
                <div className="labor-management-img">
                    <img src={management_img1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Management