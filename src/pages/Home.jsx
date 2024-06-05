import { ButtomContainer, CardContainer, IconContainer, ResultContainer } from "./Home.styles";

import IconStarImg from "../assets/icon-star.svg"
import TankYouuImg from "../assets/illustration-thank-you.svg"
import { useState } from "react";

export function Home() {
    const [mostrarResultado, setMostrarResultado] = useState(false)
    const [feedbackNote, setFeedbackNote] = useState(0)

    function handFeedbackButtomClick(event) {
        const feedback = Number(event.target.innerText)

        setFeedbackNote(feedback)
    }

    function handSubmit() {
        if(feedbackNote === 0) return

        setMostrarResultado(true)
    }
  
    return (
        mostrarResultado === false ? (
        <CardContainer>
        <IconContainer>
            <img src={IconStarImg} alt="icone de estrela" />
        </IconContainer>
        
        <h1>Como foi o atendimento?</h1>
        
        <p>Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!</p>

        <ButtomContainer>

            <button onClick={handFeedbackButtomClick}>1</button>
            <button onClick={handFeedbackButtomClick}>2</button>
            <button onClick={handFeedbackButtomClick}>3</button>
            <button onClick={handFeedbackButtomClick}>4</button>
            <button onClick={handFeedbackButtomClick}>5</button>

        </ButtomContainer>

        <button onClick={handSubmit}>Enviar</button>
    </CardContainer>
    ) : (
        <CardContainer>
            <img src={TankYouuImg} alt="imagem de agradecimento" />
            
            <ResultContainer>
                <p>Você selecionou {feedbackNote} de 5</p>
            </ResultContainer>

            <h1>Obrigado!</h1>
            <p>Agradecemos por dedicar um momento para nos avaliar. Se precisar de mais sporte, não hesite em entrar em contato!</p>
        </CardContainer>
    )
  )
}
