import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link
        to="/"
        className="flex items-center justify-center font-bold bg-color text-3xl p-5 "
      >
        <img className="w-12 mr-2" src="images/logo.png" alt="" />
        <div>WSIWT</div>
      </Link>
    </div>
  );
}
