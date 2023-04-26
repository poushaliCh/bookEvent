import React from "react";
import { NavLink } from "react-router-dom";
// import "../index.css"

export default function Menu() {
  return (
    <div style={{display:'flex',justifyContent:"space-between", borderBottom:"1px solid black"}}>
      <div style={{ marginRight: "40px",marginLeft:'10px' }}>
        <NavLink exact activeClassName="active_class" to="/" style={{textDecoration:'none'}}>
          <h3 style={{border:'1px solid black',padding:'15px',borderRadius:'20px',color:'white',backgroundColor:'#53098E'}}>Game List</h3>
        </NavLink>
      </div>
    <h1 style={{color:'#53098E'}}>Event Game Booking</h1>
    </div>
  );
}
