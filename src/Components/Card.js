import {useState} from "react";


export default function Card(props){
    const {question, ID} = props;
    const [selected, setSelected] = useState(true);
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
    return selected ? (
        <div className="card" onClick={() => setSelected(false)}>
            <p>{question}</p>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    ) : (
        <div className="question">
            <p>{questions[ID]}</p>
            <img src='assets/setinha.png' alt="seta" />
        </div>
    );
}
