import { useState } from "react";
import { JogoModel } from "../../Models/JogoModel"
import ListarJogo from "../ListarJogo/ListarJogo";
import setJogo from "../Util/JogoUtil";
import Pontuar from "../Util/PontuarUtil";
import { PontuacaoModel } from "../../Models/PontuacaoModel";

function AtualizarJogo(){

    const [pontuacao, setPontuacao] = useState(new PontuacaoModel(0,0,0));

    return(
        <div>

            {/* pontuacao parcial de cada dupla
            qual set 
            tipo do set 
            tipo do game  */}

<p>AtualizarJogo</p>

            <p> Pontuacao {pontuacao.pontuacao}</p>
            <p> Game {pontuacao.games}</p>
            <p> Set {pontuacao.sets}</p>


            <button onClick= {() => setPontuacao( Pontuar(pontuacao))}>Pontuar</button>
            <button onClick= {() => setPontuacao({...pontuacao })}>Pontuar2</button>

            <hr />
        </div>
    )
}

export default AtualizarJogo