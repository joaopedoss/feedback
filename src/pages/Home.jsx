import { ButtomContainer, CardContainer, IconContainer, ResultContainer } from "./Home.styles";

import IconStarImg from "../assets/icon-star.svg"
import TankYouuImg from "../assets/illustration-thank-you.svg"

export function Home() {
    let aparecerResultado = true
  
    return (
    aparecerResultado === false ? (
        <CardContainer>
        <IconContainer>
            <img src={IconStarImg} alt="icone de estrela" />
        </IconContainer>
        
        <h1>Como foi o atendimento?</h1>
        
        <p>Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!</p>

        <ButtomContainer>

            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>

        </ButtomContainer>

        <button>Enviar</button>
    </CardContainer>
    ) : (
        <CardContainer>
            <img src={TankYouuImg} alt="imagem de agradecimento" />
            
            <ResultContainer>
                <p>Você selecionou 4 de 5</p>
            </ResultContainer>

            <h1>Obrigado!</h1>
            <p>Agradecemos por dedicar um momento para nos avaliar. Se precisar de mais sporte, não hesite em entrar em contato!</p>
        </CardContainer>
    )
  )
}
