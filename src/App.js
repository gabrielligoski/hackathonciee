import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Presentation from "./Presentation/Presentation";
import Ceci from "./ceci/Ceci";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" pathname="/" element={<Presentation />} />
                <Route path="/ola" pathname="/ola" element={<Ceci />} />
            </Routes>
        </BrowserRouter>
    );
}
