import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Presentation from "./Presentation/Presentation";
import Ceci from "./Ceci/Ceci";
import Options from "./Options/Options";
import Register from "./Register/Register";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" pathname="/" element={<Presentation />} />
                <Route path="/welcome" pathname="/welcome" element={<Ceci />} />
                <Route path="/options" pathname="/options" element={<Options />} />
                <Route path="/register" pathname="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}
