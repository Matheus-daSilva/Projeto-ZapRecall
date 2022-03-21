import { useState } from "react";

export default function LastCard({ ID }) {
    const [selected, setSelected] = useState(true);
    const [state, setState] = useState("true");
    const questions = ["Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4", "Pergunta 5", "Pergunta 6", "Pergunta 7", "Pergunta 8"];
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
    if (state == "true") {
        return (
            <div className="question">
                <p>{answers[ID]}</p>
                <div className="answer-buttons">
                    <div onClick={() => setState("red")}>
                        <button className="red" onClick={() => setSelected(false)}>Não lembrei</button>
                    </div>
                    <div onClick={() => setState("orange")}>
                        <button className="orange" onClick={() => setSelected(false)}>Quase não lembrei</button>
                    </div>
                    <div onClick={() => setState("green")}>
                        <button className="green" onClick={() => setSelected(false)}>Zap</button>
                    </div>
                </div>
            </div>
        )
    }
    else {

        if (state == "red") {
            return (
                <div className="card card-red">
                    <p>{questions[ID]}</p>
                    <ion-icon name="close-circle"></ion-icon>
                </div>
            )
        }
        if (state == "orange") {
            return (
                <div className="card card-orange">
                    <p>{questions[ID]}</p>
                    <ion-icon name="help-circle"></ion-icon>
                </div>
            )
        }
        if (state == "green") {
            return (
                <div className="card card-green">
                    <p>{questions[ID]}</p>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
            )
        }
    }

}