import Card from "./Card"

export default function Flashcards() {
    const questions = ["Pergunta 1", "Pergunta 2", "Pergunta 3", "Pergunta 4", "Pergunta 5", "Pergunta 6", "Pergunta 7", "Pergunta 8"];
    return (
        <>
            <header>
                <img src='assets/logo.png' alt="logo raio" />
                <p>ZapRecall</p>
            </header>
            <main>

                {questions.map((question) => {
                
                    return <Card question={question} ID={questions.indexOf(question)} />
                })}

            </main>
            <footer>
                <p>0/8 CONCLUÍDOS</p>
            </footer>
        </>
    )
}