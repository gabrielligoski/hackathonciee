import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Presentation from "./Presentation/presentation";
import First from "./ceci/first/first";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" pathname="/" element={<Presentation />} />
                <Route path="/ola" pathname="/ola" element={<First />} />
            </Routes>
        </BrowserRouter>
    );
}
