import {useState} from "react";

export default function Answers({ID}){
    const [turn, setTurn] = useState(true);
    const questions = [
        "O que é JSX?",
        "O React é_",
        "Componentes devem iniciar com_",
        "Podemos colocar _ dentro do JSX",
        "O ReactDOM nos ajuda_ ",
        "Usamos o npm para_",
        "Usamos props para_",
        "Usamos estado (state) para_"
    ];
    const answers = [
        "Uma extensão de linguagem do JavaScript",
        "Uma biblioteca JavaScript para construção de interfaces",
        "Letra maiúscula",
        "Expressões",
        "Interagindo com a DOM para colocar componentes React na mesma",
        "Gerenciar os pacotes necessários e suas dependências",
        "Passar diferentes informações para componentes",
        "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    ];
    return turn ? (
        <div className="question">
            <p>{questions[ID]}</p>
            <img src='assets/setinha.png' alt="seta" onClick={() => setTurn(false)}/>
        </div>
    ) : (
        <div className="question">
            <p>{answers[ID]}</p>
            <div className="answer-buttons">
                <button className="red">Não lembrei</button>
                <button className="orange">Quase não lembrei</button>
                <button className="green">Zap!</button>
            </div>
        </div>
    )
}