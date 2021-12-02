import './Ceci.css';
import logo from "../img/logo2.png";
import ceci from "../img/ceci.png";
import React, {useRef} from "react";
import Chat from "./Chat";



function Ceci() {

    return (
        <div className="wrapper w-full h-full">
            <img src={logo} className="z-50 absolute m-16 w-48" alt="logo"/>
            <img src={ceci} className="z-50 absolute bottom-0 right-0 m-16 w-64" alt="ceci"/>
            <div className="flex items-center justify-center pt-80 text-4xl pb-32 text-left">
                <div id="first-of-type">Cecília,</div>
                <div id="last-of-type">
                    <span>&nbsp;sua assistente virtual</span>
                </div>
            </div>
            <Chat/>
            <ul className="bg-bubbles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
}

export default Ceci;
