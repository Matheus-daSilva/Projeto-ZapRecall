import { useState } from "react";
import Card from "./Card"
import Footer from "./Footer";

export default function Flashcards() {
    const [finished, setFinished] = useState(0);
    const questions = ["Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4", "Pergunta 5", "Pergunta 6", "Pergunta 7", "Pergunta 8"];
    return (
        <>
            <header>
                <img src='assets/logo.png' alt="logo raio" />
                <p>ZapRecall</p>
            </header>
            <main>

                {questions.map((question) => {
                
                    return <Card question={question} ID={questions.indexOf(question)} finished={finished} setFinished={setFinished}/>
                })}

            </main>
            <Footer finished={finished}/>
        </>
    )
}