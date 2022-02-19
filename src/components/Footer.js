import React from "react";

var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    height: "50px",
    width: "100%",
    display: 'block',
}

function Footer({ children }) {
    return (
        <div style={style}>
            &copy; 2022 Copyrights
        </div>
    )
}

export default Footer