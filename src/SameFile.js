import React from 'react'

const SameFile = () => {



    return (
        <div style={{ background: "grey", padding: "100px", fontSize: "36px" }}>
            <h2 style={{ margin: 0, fontSize: "70px" }}>Coding by Ambar</h2>
            <p style={{ margin: 0 }}>Testing Purpose with React.</p>
            <button style={{ marginTop: "50px", padding: "15px 50px", background: "black", fontSize: "15px", borderRadius: "8px", cursor: "pointer", color: "white" }}>Apply</button>
            <div style={{ display: "flex", gap: "10px", justifyContent: "space-between", alignItems: "center", marginTop: "50px", flexWrap: "wrap" }}>
                <div>
                <div style={{ height: "360px", width: "360px", backgroundColor: "lightgreen", cursor: "pointer", animation: "mymove 5s infinite", display:"flex", alignItems:"center",justifyContent:"center",animationDelay:"0.5" }}>
                        Coding Part 1
                    </div>
                    <h3 style={{ margin: 0 }}>Testing Phase 1</h3>
                    <p style={{ margin: 0, fontSize: "25px" }}>Testing Complete</p>
                </div>

                <div>
                    <div style={{ height: "360px", width: "360px", backgroundColor: "lightgreen", cursor: "pointer", animation: "mycoding 5s infinite", display:"flex", alignItems:"center",justifyContent:"center",animationDelay:"0.5" }}>
                        Coding Part 1
                    </div>
                    <h3 style={{ margin: 0 }}>Testing Phase 2</h3>
                    <p style={{ margin: 0, fontSize: "25px" }}>Testing in Progress</p>
                </div>

                <div>
                <div style={{ height: "360px", width: "360px", backgroundColor: "lightgreen", cursor: "pointer", animation: "mymoon 5s infinite", display:"flex", alignItems:"center",justifyContent:"center",animationDelay:"0.5" }}>
                        Coding Part 1
                    </div>
                    <h3 style={{ margin: 0 }}>Testing Phase 3</h3>
                    <p style={{ margin: 0, fontSize: "25px" }}>Testing Pending</p>
                </div>


            </div>
        </div>


    )
}

export default SameFile