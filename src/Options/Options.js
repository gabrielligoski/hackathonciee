import './Options.css';
import logo from "../img/logo2.png";
import ceci from "../img/ceci.png";
import React, {useState} from "react";
import {Fade, Typography} from "@mui/material";


function Options() {
    const [internships, setInternships] = useState(false);

    return (
        <Fade in={true} timeout={600}>
            <div className="wrapper w-full h-full">
                <img src={logo} className="z-50 absolute m-16 w-48" alt="logo"/>
                <img src={ceci} className="z-50 absolute bottom-0 right-0 m-16 w-64" alt="ceci"/>
                <div className={internships === true ? "invisible" : ""}>
                    <Typography className={"flex items-center justify-center pt-80 text-4xl pb-16 text-left"}>
                        <p className={"text-4xl text-center"}>
                            O que você deseja?</p>
                    </Typography>
                    <div className={"flex flex-col items-center space-y-10"}>
                        <button className={"button-53 z-30"} onClick={() => {
                            setInternships(true)
                            setTimeout(() => {
                                // do thing
                            }, 5000)
                        }}>Estou procurando vagas
                        </button>
                        <button className={"button-53 z-30"}
                                onClick={() => window.location='https://portal.ciee.org.br/empresas/'}>Quero contratar
                            usando a plataforma
                        </button>
                        <button className={"button-53 z-30"}
                                onClick={() => window.location='https://portal.ciee.org.br/tags/parcerias'}>Estou interessado
                            em
                            uma parceria.
                        </button>
                        <button className={"button-53 z-30"}
                                onClick={() => window.location='https://portal.ciee.org.br/blog/'}>Gostaria de conhecer
                            mais sobre o CIEE
                        </button>
                    </div>
                </div>
                {internships === true ?
                    <Fade in={true} timeout={1200}>
                        <Typography
                            className={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"}>
                            <p className={"text-5xl text-center"}>Então está no lugar certo! só vou precisar de algumas
                                informações antes de começarmos.</p>
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

export default Options;
