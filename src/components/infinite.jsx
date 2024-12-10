import React from 'react'
import '../css/infinite.css'
import Frame1 from "../assets/Frame1.png"
import Frame2 from "../assets/Frame2.png"
import Frame3 from "../assets/Frame3.png"
import Frame4 from "../assets/Frame4.png"
import Frame5 from "../assets/Frame5.png"
import Frame6 from "../assets/Frame6.png"
import Frame7 from "../assets/Frame7.png"

function infinite() {
  return (
    <div className='slider' style={{ "--width": "100px", "--height": "120px" , "--quantity" : "7" }}>
      <div className="list">
         <div className="item" style={{"--position": 1}}><img src= {Frame1} alt="" /></div>
         <div className="item" style={{"--position": 2}}><img src= {Frame2} alt="" /></div>
         <div className="item" style={{"--position": 3}}><img src= {Frame3} alt="" /></div>
         <div className="item" style={{"--position": 4}}><img src= {Frame4} alt="" /></div>
         <div className="item" style={{"--position": 5}}><img src= {Frame5} alt="" /></div>
         <div className="item" style={{"--position": 6}}><img src= {Frame6} alt="" /></div>
         <div className="item" style={{"--position": 7}}><img src= {Frame7} alt="" /></div>
      </div>
      </div>
  )
}

export default infinite