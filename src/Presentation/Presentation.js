import './Presentation.css';
import logo from "../img/logo2.png";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function Presentation() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(function(){
            navigate('/welcome');
        }, 5000);
        // eslint-disable-next-line
    }, [])

    function pageChange(route) {
        navigate(route);
    }

    return (
        <div className="wrapper w-full h-full" onClick={() => pageChange('/welcome')}>
            <img src={logo} className="z-50 absolute m-16 w-48" alt="logo"/>
            <div className="animated-title">
                <div className="text-top text-4xl text-right">
                    <div className="w-full">
                        <span>Você deu mais um passo em direcão ao sucesso</span>
                        <span>Bem vindo ao CIEE</span>
                    </div>
                </div>
                <div className="text-bottom text-3xl">
                    <div>“Se a oportunidade não bater, construa uma porta”,<br/> Milton Berle</div>
                </div>
            </div>

        </div>
    );
}

export default Presentation;
