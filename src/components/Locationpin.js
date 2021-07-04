import React from 'react';

const Locationpin = ({ text }) => (
    <div style={{ height: '30px', width: '30px' }}>
      <img src='/images/icon-location.svg'  alt='pin-point location' style={{ height: '40px', width: '30px'}}/>
      {/* <p className="pin-text">{text}</p> */}
    </div>
  )

export default Locationpin
