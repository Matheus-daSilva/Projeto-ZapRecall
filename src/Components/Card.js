import {useState} from "react";
import Answers from "./Answers";

export default function Card(props){
    const {question, ID} = props;
    const [selected, setSelected] = useState(true);

    return selected ? (
        <div className="card" onClick={() => setSelected(false)}>
            <p>{question}</p>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    ) : ( 
        <Answers ID={ID} />
    );
}
