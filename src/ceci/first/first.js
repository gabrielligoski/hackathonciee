import './first.css';
import logo from "../../img/logo2.png";
import ceci from "../../img/ceci.png";

function First() {
    return (
        <div className="wrapper w-full h-full">
            <img src={logo} className="z-50 absolute m-16 w-48" alt="logo"/>
            <img src={ceci} className="z-50 absolute bottom-0 right-0 m-16 w-64" alt="ceci"/>
            <div className="animated-title">
                <div className="text-top text-4xl text-right">
                    <div className="w-full">
                        <span>Você deu mais um passo em direcão ao ola</span>
                        <span>Bem vindo ao CIEE</span>
                    </div>
                </div>
                <div className="text-bottom text-3xl">
                    <div>“Se a oportunidade não bater, construa uma porta”,<br/> Milton Berle</div>
                </div>
            </div>

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

export default First;
