import {useState} from "react";
import Answers from "./Answers";

export default function Card(props){
    const {questions, ID, finished, setFinished} = props;
    const [selected, setSelected] = useState(true);

    return selected ? (
        <div className="card" onClick={() => setSelected(false)}>
            <p>Pergunta {ID + 1}</p>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    ) : ( 
        <Answers ID={ID} finished={finished} setFinished={setFinished}/>
    );
}
