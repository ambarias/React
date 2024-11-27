import React from 'react'
import { FaArrowRight, FaRegHeart } from 'react-icons/fa'

const SameFile = () => {


    return (
        <div style={{
              backgroundImage: "url('https://w0.peakpx.com/wallpaper/45/396/HD-wallpaper-dark-love-coco-black-decoration-decorative-heart-pretty-valentine-valentines.jpg')", opacity:0.9,backgroundPosition: "center",
         padding: "20px 100px", fontSize: "36px" }}>
            <h2 style={{ margin: 0, fontSize: "70px" }}>Coding by Ambar</h2>
            <p style={{ margin: 0 }}>React.</p>
            <button style={{ marginTop: "20px", padding: "15px 50px", background: "darkpink", fontSize: "15px", borderRadius: "8px", cursor: "pointer", color: "black", display: "flex", alignItems: "center", lineHeight: "13px",  }}>LOVE<FaArrowRight style={{marginLeft: "10px", alignItems :"center", color: "black" }} /></button>
            <div style={{ display: "flex", gap: "10px", justifyContent: "space-between", alignItems: "center", marginTop: "30px", flexWrap: "wrap" }}>
                <div>
                    <div className='icon-container' style={{ fontSize: "10rem", color: "yellow", cursor: "pointer", animation: "mymove 10s infinite", display: "flex", alignItems: "center", justifyContent: "center", animationDelay: "5s" }}>
                        <FaRegHeart className='heart-class' style={{ height: "360px", width: "360px" }} />
                        <span className='hoverStyling' style={{ position: "absolute" }}>I</span>
                    </div>
                    <h3 style={{ margin: 0 }}>I</h3>
                    <p style={{ margin: 0, fontSize: "25px" }}></p>
                </div>

                <div>
                    <div className='icon-container' style={{ fontSize: "10rem", color: "red", cursor: "pointer", animation: "mycoding 10s infinite", display: "flex", alignItems: "center", justifyContent: "center", animationDelay: "5s" }}>
                        <FaRegHeart className='heart-class' style={{ height: "360px", width: "360px" }}  />
                        <span className='hoverStyling' style={{ position: "absolute" }}>A</span>
                    </div>
                    <h3 style={{ margin: 0 }}>Love</h3>
                    <p style={{ margin: 0, fontSize: "25px" }}></p>
                </div>

                <div>
                    <div className='icon-container' style={{ fontSize: "10rem", color: "yellow", cursor: "pointer", animation: "mymoon 10s infinite", display: "flex", alignItems: "center", justifyContent: "center", animationDelay: "5s" }}>
                        <FaRegHeart className='heart-class' style={{ height: "360px", width: "360px" }} />
                        <span className='hoverStyling' style={{ position: "absolute" }}>S</span>
                    </div>
                    <h3 style={{ margin: 0 }}>You</h3>
                    <p style={{ margin: 0, fontSize: "25px" }}>Only you</p>
                    
                    
                </div>


            </div>
        </div>


    )
}

export default SameFile