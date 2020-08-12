import React from "react";
import "./css/SidebarMenu.css";
import { NavLink } from "react-router-dom";

export default function SidebarMenu() {
  return (
    <div>
      <ul className="menuList">
        <li>Home</li>
        <NavLink to="/topStories">
          <li>Top stories</li>
        </NavLink>
        <NavLink to="/source">
          <li>Source</li>
        </NavLink>
        <li>Following</li>
        <li>Bookmark</li>
        <hr />
        <li>Business</li>
        <li>Technology</li>
        <li>Entertainment</li>
        <li>Sport</li>
        <li>Science</li>
        <li>Health</li>
        <li>Politics</li>
        <li>World</li>
        <li>India</li>
      </ul>
    </div>
  );
}
