import { useState } from "react";

export default function Answers(props) {
    const {questions, ID, setFinished, finished} = props;
    const [selected, setSelected] = useState(true);
    const [state, setState] = useState("");
    if (state == "") {
        return (
            <div className="question">
                <p>{questions[ID].answer}</p>
                <div className="answer-buttons">
                        <button className="red" onClick={() => {
                            setSelected(false)
                            setFinished(finished + 1)
                            setState("red")
                        }
                        }>Não lembrei</button>
                        <button className="orange" onClick={() => {
                            setSelected(false)
                            setFinished(finished + 1)
                            setState("orange")
                        }
                        }>Quase não lembrei</button>
                        <button className="green" onClick={() => {
                            setSelected(false)
                            setFinished(finished + 1)
                            setState("green")
                        }
                        }>Zap</button>
                </div>
            </div>
        )
    }
    else {

        if (state == "red") {
            return (
                <div className="card card-red">
                    <p>Pergunta {ID + 1}</p>
                    <ion-icon name="close-circle"></ion-icon>
                </div>
            )
        }
        if (state == "orange") {
            return (
                <div className="card card-orange">
                    <p>Pergunta {ID + 1}</p>
                    <ion-icon name="help-circle"></ion-icon>
                </div>
            )
        }
        if (state == "green") {
            return (
                <div className="card card-green">
                    <p>Pergunta {ID + 1}</p>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
            )
        }
    }

}