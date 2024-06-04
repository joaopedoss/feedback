import { ButtomContainer, CardContainer, IconContainer } from "./Home.styles";

import IconStarImg from "../assets/icon-star.svg"

export function Home() {
  return (
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
  )
}
