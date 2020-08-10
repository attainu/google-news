import React from "react";
import "./css/SidebarMenu.css";
import { Link } from "react-router-dom";

export default function SidebarMenu() {
  return (
    <div>
      <ul className="menuList">
        <li>Home</li>
        <Link to="/topStories">
          <li>Top stories</li>
        </Link>
        <li>Source</li>
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
