import { useState } from "react";
import Card from "./Card"
import Footer from "./Footer";

export default function Flashcards() {
    const [finished, setFinished] = useState(0);
    const [mix, setMix] = useState([]);
    const questions = [
        { question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
        { question: "O React é__", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        { question: "Componentes devem iniciar com__", answer: "Letra maiúscula" },
        { question: "Podemos colocar __ dentro do JSX", answer: "Expressões" },
        { question: "O ReactDOM nos ajuda__", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
        { question: "Usamos o npm para__", answer: "Gerenciar os pacotes necessários e suas dependências" },
        { question: "Usamos estado (state) para__", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" },
        { question: "Usamos props para__", answer: "Passar diferentes informações para componentes " },
    ];
    mixCards();
    return (
        <>
            <header>
                <img src='assets/logo.png' alt="logo raio" />
                <p>ZapRecall</p>
            </header>
            <main>

                {questions.map((question) => {
                    return <Card ID={questions.indexOf(question)} finished={finished} setFinished={setFinished} questions={mix} />
                })}

            </main>
            <Footer finished={finished} />
        </>
    )
    function mixCards() {
        if (mix.length == 0) {
            questions.sort((a,b) => Math.random() - 0.5);
            setMix([...questions]);
        }
    }
}
