import React from "react";
import './css/SidebarMenu.css'

export default function SidebarMenu() {
    return (
        <div>
            <ul className='menuList'>
                <li>Home</li>
                <li>Top stories</li>
                <li>Source</li>
                <li>Following</li>
                <li>Bookmark</li>
                <hr/>
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
