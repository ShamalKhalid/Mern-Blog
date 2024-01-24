import React from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <Navbar className="border-b-2">
      <Link to="/">
        <span className="st-icon-pandora">Shamal Khalid</span>
      </Link>
    </Navbar>
  );
}
