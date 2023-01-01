import React from "react";
import { BiCloset } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Link
      to="/"
      className="flex items-center font-bold bg-color text-3xl py-3 "
    >
      <img className="w-12 mr-2" src="images/logo.png" alt="" />
      <div>WSIWT</div>
    </Link>
  );
}
