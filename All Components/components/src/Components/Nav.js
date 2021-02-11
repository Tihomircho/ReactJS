import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white"
  };
  return (
    <div className="Nav">
      <ul>
        <li>Logo</li>
      </ul>
      <ul>
        <Link style={navStyle} to="/counter">
          <li>Counter</li>
        </Link>
        <Link style={navStyle} to="/shopcounter">
          <li>Shop Counter</li>
        </Link>
        <Link style={navStyle} to="/windowwidth">
          <li>Window Width</li>
        </Link>
        <Link style={navStyle} to="/formsignup">
          <li>Form</li>
        </Link>
      </ul>
    </div>
  );
}
export default Nav;
