export default function Flashcards(){
    return (
        <>
        <header>
            <img src='assets/logo.png' />
            <p>ZapRecall</p> 
        </header>
        <main>
            <div className="card">
                <p>Pergunta 1</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <div className="card">
                <p>Pergunta 1</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <div className="card">
                <p>Pergunta 1</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <div className="card">
                <p>Pergunta 1</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
        </main>
        <footer>
            <p>0/8 CONCLUÍDOS</p>
        </footer>
        </>
    )
}