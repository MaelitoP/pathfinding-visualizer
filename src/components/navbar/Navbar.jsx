import React from 'react';
import "./Navbar.css";
import "./Navbar.scss";

function Navbar() {
    return (
        <div className="container">
            <div className="nav-bar"></div>
            <p data-item='Pathfinding'>Pathfinding</p>
            <p data-item='Visualizer'>Visualizer</p>
            <div className="author">Made by Maël Le Petit</div>
             
            <nav>
                <ul class="menuItems">
                    <li><a href='#' onClick={() => {console.log(this.state.locked)}} data-item='Dijkstra'>Dijkstra</a></li>
                    <li><a href='#' onClick={() => {}} data-item='Reset'>Reset</a></li>
                </ul>
            </nav>
            
        </div>
    )
}

export default Navbar;