import React from "react";
import { useNavigate } from "react-router-dom";
import { MenuItem } from "./menu-item";

export const Header = () => {
  const navigate = useNavigate();
  const redirectToHome = () => navigate("/");
  return (
    <header className="flex justify-between p-2 pr-10 pl-10 border border-gray-200">
      <div className="flex gap-5 items-center">
        <MenuItem>Women</MenuItem>
        <MenuItem>Men</MenuItem>
        <MenuItem>Kids</MenuItem>
      </div>
      <h1
        className="text-5xl font-bold cursor-pointer hover:bg-gray-100"
        onClick={redirectToHome}
      >
        RBond Shop
      </h1>
      <div className="flex gap-5 items-center">
        <MenuItem>Icon</MenuItem>
        <MenuItem>Icon</MenuItem>
        <MenuItem>Icon</MenuItem>
      </div>
    </header>
  );
};
