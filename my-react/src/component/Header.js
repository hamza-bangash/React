import React from "react";
import "./Header.css";


export default function Header(){
    return(
        <header className="header">
            <nav className="nav-bar">
                <img src alt="logo"/>
                <h3 className="brandName">ReactFacts</h3>
            </nav>
            <h4 className="sidebar">React Course - Project 1</h4>
        </header>
    );
}