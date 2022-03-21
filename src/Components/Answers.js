import {useState} from "react";
import LastCard from "./LastCard";

export default function Answers(props){
    const {ID, finished, setFinished} = props;
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
    return turn ? (
        <div className="question">
            <p>{questions[ID]}</p>
            <img src='assets/setinha.png' alt="seta" onClick={() => setTurn(false)}/>
        </div>
    ) : (
        <LastCard ID={ID} finished={finished} setFinished={setFinished}/>
    )
}