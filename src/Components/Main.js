import {useState} from "react";
import Flashcards from "./Flashcards";

export default function ZapRecall(){
    const [selected, setSelected] = useState(true);
    return selected ? (
        <section className='zap-recall'>
            <img src='assets/logo.png' alt="logo raio" />
            <p>ZapRecall</p>
            <button onClick={() => setSelected(false)}>Iniciar Recall!</button>
        </section>
    ) : (
           <Flashcards />
        );
}