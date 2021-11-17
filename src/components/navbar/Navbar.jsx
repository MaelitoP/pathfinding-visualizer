import React from 'react';
import "./Navbar.css";
import { GiPathDistance } from "react-icons/gi";

function Navbar() {
    return (
        <div class="nav-bar">
            <h1><GiPathDistance /> Pathfinding Visualizer</h1>
        </div>
    )
}

export default Navbar;