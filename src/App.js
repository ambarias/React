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
