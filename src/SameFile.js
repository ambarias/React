import React from 'react'
import { FaArrowRight, FaRegHeart } from 'react-icons/fa'

const SameFile = () => {



    return (
        <div style={{ background: "grey", padding: "100px", fontSize: "36px" }}>
            <h2 style={{ margin: 0, fontSize: "70px" }}>Coding by Ambar</h2>
            <p style={{ margin: 0 }}>Testing Purpose with React.</p>
            <button style={{ marginTop: "50px", padding: "15px 50px", background: "black", fontSize: "15px", borderRadius: "8px", cursor: "pointer", color: "white" }}>Apply<FaArrowRight /></button>
            <div style={{ display: "flex", gap: "10px", justifyContent: "space-between", alignItems: "center", marginTop: "50px", flexWrap: "wrap" }}>
                <div>
                    <div style={{ fontSize: "10rem", color: "lightgreen", cursor: "pointer", animation: "mymove 10s infinite", display: "flex", alignItems: "center", justifyContent: "center", animationDelay: "5s" }}>
                        <FaRegHeart style={{ height: "360px", width: "360px" }} />
                        <span style={{ position: "absolute" }}>I</span>
                    </div>
                    <h3 style={{ margin: 0 }}>Testing Phase 1</h3>
                    <p style={{ margin: 0, fontSize: "25px" }}>Testing Complete</p>
                </div>

                <div>
                    <div style={{ height: "360px", width: "360px", color: "lightgreen", cursor: "pointer", animation: "mycoding 10s infinite", display: "flex", alignItems: "center", justifyContent: "center", animationDelay: "5s" }}>
                        <FaRegHeart  />
                        <FaRegHeart style={{ position: "absolute", height: "300px", width: "300px", color: "lightgreen", cursor: "pointer", animation: "mycoding 10s infinite", display: "flex", alignItems: "center", justifyContent: "center", animationDelay: "5s" }} />
                    </div>
                    <h3 style={{ margin: 0 }}>Testing Phase 2</h3>
                    <p style={{ margin: 0, fontSize: "25px" }}>Testing in Progress</p>
                </div>

                <div>
                    <div style={{ height: "360px", width: "360px", backgroundColor: "lightgreen", cursor: "pointer", animation: "mymoon 10s infinite", display: "flex", alignItems: "center", justifyContent: "center", animationDelay: "5s" }}>
                        Coding Part 3
                    </div>
                    <h3 style={{ margin: 0 }}>Testing Phase 3</h3>
                    <p style={{ margin: 0, fontSize: "25px" }}>Testing Pending</p>
                </div>


            </div>
        </div>


    )
}

export default SameFile