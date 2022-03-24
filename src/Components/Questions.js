import { useState } from "react";
import Answers from "./Answers";

export default function Questions(props) {
    const { questions, ID, finished, setFinished } = props;
    const [turn, setTurn] = useState(true);
    return turn ? (
        <div className="question">
            <p>{questions[ID].question}</p>
            <img src='assets/setinha.png' alt="seta" onClick={() => setTurn(false)} />
        </div>
    ) : (
        <Answers ID={ID} finished={finished} setFinished={setFinished} questions={questions}/>
    )
}