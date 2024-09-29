import React from "react";
import { Link } from "react-router-dom";

function Navbar() {


  const links = () => {
    return (
      <ul className="flex py-4 justify-between md:flex md:justify-normal">
        <Link to="home">
          <li className="md:mx-10">Home</li>
        </Link>
        <Link to="about" id="#explore">
          <li className="md:mx-10">About</li>
        </Link>
        <Link to="contact">
          <li className="md:mx-10">Contact</li>
        </Link>
        <a
          href="https://drive.google.com/file/d/162MZt3QjBPz7XVczghNLNOQc1-3rI5Gp/view?usp=share_link"
          target="_blank"
          rel="noreferrer"
          className="md:mx-10"
        >Resume
        </a>
      </ul>
    );
  };
  return (
    <div className="text-[20px] px-10">
      {links()}
    </div>
  );
}

export default Navbar;
