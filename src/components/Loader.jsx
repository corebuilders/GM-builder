import React from 'react'
import './css/Loader.css'

const Loader = (props) => {
  return (
    <div className={`${props.run ? "" : "hidden"}`}>
      <div className="spinner">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Loader
