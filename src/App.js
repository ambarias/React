import SameFile from "./SameFile";

import './App.css';

const boxStyle = {
  backgroundColor: "red", // Black background color
  color: "white",           // White text for contrast
  padding: "5px",          // Padding inside the box
  textAlign: "left",      // Optional: center-align text
  paddingLeft: "25px",
  marginBottom:"40px"
};

const HeartIcon = ({ size = 100, color = "red" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      width={size}
      height={size}
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
};

const tabletdthStyle = {
  border: "1px solid #dddddd",
  textAlign: "left",
  padding: "8px"
};

const tableStyle = {
  fontFamily: "arial, sans-serif",
  borderCollapse: "collapse",
  width: "100%"
}

function App() {
  return (
    <>
    <SameFile/>
    {/* <div style={boxStyle}>
      <h1 style={{margin:"0px"}}>Mail - ambar.singh@snva.com</h1>
    </div>
    <div style={{display:"flex",gap:"1rem"}}>
    <table style={tableStyle}>
  <tr>
  <th style={{ ...tabletdthStyle, fontSize: "22px",background:"#e1e132",textAlign: "center" }}>Company</th>
</tr>


  <tr>
    <td style={tabletdthStyle}>Alfreds Futterkiste</td>
  </tr>
  <tr>
    <td style={tabletdthStyle}>Centro comercial Moctezuma</td>
  </tr>
  <tr>
    <td style={tabletdthStyle}>Ernst Handel</td>
  </tr>
  <tr>
    <td style={tabletdthStyle}>Island Trading</td>
  </tr>
  <tr>
    <td style={tabletdthStyle}>Laughing Bacchus Winecellars</td>
  </tr>
  <tr>
    <td style={tabletdthStyle}>Magazzini Alimentari Riuniti</td>
  </tr>
</table>
      
    <table style={tableStyle}>
  <tr>
  <th style={{ ...tabletdthStyle, fontSize: "22px",background:"#e1e132",textAlign: "center" }}>Designation</th>

  </tr>
  <tr>
    <td style={tabletdthStyle}>Alfreds Futterkiste</td>
  </tr>
  <tr>
    <td style={tabletdthStyle}>Centro comercial Moctezuma</td>
  </tr>
  <tr>
    <td style={tabletdthStyle}>Ernst Handel</td>
  </tr>
  <tr>
    <td style={tabletdthStyle}>Island Trading</td>
  </tr>
  <tr>
    <td style={tabletdthStyle}>Laughing Bacchus Winecellars</td>
  </tr>
  <tr>
    <td style={tabletdthStyle}>Magazzini Alimentari Riuniti</td>
  </tr>
</table>
<table style={tableStyle}>
  <tr>
  <th style={{ ...tabletdthStyle, fontSize: "22px",background:"#e1e132",textAlign: "center" }}>Laptop</th>

  </tr>
  <tr>
    <td style={tabletdthStyle}>Alfreds Futterkiste</td>
  </tr>
  <tr>
    <td style={tabletdthStyle}>Centro comercial Moctezuma</td>
  </tr>
  <tr>
    <td style={tabletdthStyle}>Ernst Handel</td>
  </tr>
  <tr>
    <td style={tabletdthStyle}>Island Trading</td>
  </tr>
  <tr>
    <td style={tabletdthStyle}>Laughing Bacchus Winecellars</td>
  </tr>
  <tr>
    <td style={tabletdthStyle}>Magazzini Alimentari Riuniti</td>
  </tr>
</table>
    </div> */}
    </>
  );
}

export default App;
