import {useState} from "react";
import Flashcards from "./Flashcards";

export default function ZapRecall(){
    const [show, setShow] = useState(true);
    return show ? (
        <section className='zap-recall'>
            <img src='assets/logo.png' alt="logo raio" />
            <p>ZapRecall</p>
            <button onClick={() => setShow(false)}>Iniciar Recall!</button>
        </section>
    ) : (
           <Flashcards />
        );
}