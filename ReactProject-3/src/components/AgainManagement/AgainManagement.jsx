import React from 'react'

const AgainManagement = ({ h2a, h2b, h2c, h2d, pa, pb, pc, pd, imga, imgb, imgc, imgd }) => {
  return (
    <div className='management'>
      <div className="labor-management">
        <div className="labor-management-img">
          <img src={imga} alt="" />
        </div>
        <div className="labor-management-text">
          <h2>{h2a}</h2>
          <p>{pa}</p>
        </div>
      </div>
      <div className="labor-management">
        <div className="labor-management-text">
          <h2>{h2b}</h2>
          <p>{pb}</p>
        </div>
        <div className="labor-management-img">
          <img src={imgb} alt="" />
        </div>
      </div>
      <div className="labor-management">
        <div className="labor-management-img">
          <img src={imgc} alt="" />
        </div>
        <div className="labor-management-text">
          <h2>{h2c}</h2>
          <p>{pc}</p>
        </div>
      </div>
      <div className="labor-management">
        <div className="labor-management-text">
          <h2>{h2d}</h2>
          <p>{pd}</p>
        </div>
        <div className="labor-management-img">
          <img src={imgd} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AgainManagement

// New  Component