import './Register.css';
import logo from "../img/logo2.png";
import ceci from "../img/ceci.png";
import React, {useState} from "react";
import {Button, Fade, TextField, Typography} from "@mui/material";


function Register() {
    const [done, setDone] = useState(false);

    function formHandler() {
        setDone(true)
    }

    return (
        <Fade in={true} timeout={600}>
            <div className="wrapper w-full h-full">
                <img src={logo} className="z-50 absolute m-16 w-48" alt="logo"/>
                <img src={ceci} className="z-50 absolute bottom-0 right-0 m-16 w-64" alt="ceci"/>
                <div className={done === true ? "invisible" : "flex flex-col space-y-6 items-center"}>
                    <Typography className={"flex items-center justify-center pt-72 text-4xl text-left"}>
                        <p className={"text-4xl text-center font-mono"}>
                            Suas Informações Básicas</p>
                    </Typography>
                    <TextField className={"w-1/4 z-30"} id="standard-basic" label="CPF" variant="standard" />
                    <TextField className={"w-1/4 z-30"} id="standard-basic" label="Nome" variant="standard" />
                    <TextField className={"w-1/4 z-30"} id="standard-basic" label="Email" variant="standard" />
                    <Button variant={"outlined"} className={"w-1/4 z-30"}
                            onClick={() => formHandler()}>Terminei!
                    </Button>
                </div>
                {done === true ?
                    <Fade in={true} timeout={1200}>
                        <Typography
                            className={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"}>
                            <p className={"text-5xl text-center font-mono"}>Prontinho!</p>
                        </Typography>
                    </Fade> : ''}
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
        </Fade>
    );
}

export default Register;
