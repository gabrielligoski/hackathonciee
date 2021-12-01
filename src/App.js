import './App.css';
import logo from "./img/logo2.png";

function App() {
    return (
        <div className="wrapper w-full h-full">
            <img src={logo} className="w-48 my-6" alt="logo"/>
            <div className="container">
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

export default App;
