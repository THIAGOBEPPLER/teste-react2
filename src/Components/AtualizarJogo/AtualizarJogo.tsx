import { useState } from "react";
import { JogoModel } from "../../Models/JogoModel"
import ListarJogo from "../ListarJogo/ListarJogo";
import setJogo from "../Util/JogoUtil";
import Pontuar from "../Util/PontuarUtil";
import { PontuacaoModel } from "../../Models/PontuacaoModel";

import "./AtualizarJogo.css"
import { spawn } from "child_process";

function AtualizarJogo(){

    const [pontuacao, setPontuacao] = useState(new PontuacaoModel(0,6,0,0,6,0,[],0,0));

    return(
        <div className="main">

            {/*
            tipo do set 
            tipo do game  */}

            <h2>Atualizar Jogo</h2>

            <p> Pontuação: {pontuacao.pontuacao1} / {pontuacao.pontuacao2}</p>
            <p> Game: {pontuacao.games1} / {pontuacao.games2}</p>
            <p> Set: {pontuacao.sets1} / {pontuacao.sets2}</p>
            { (pontuacao.tieBreak1 > 0  || pontuacao.tieBreak2 >0 ) && 
            <span>
                Tie Break: {pontuacao.tieBreak1} / {pontuacao.tieBreak2}
            </span> }
            <p> Placar: {pontuacao.placar.map((p) => {
                                    return (
                                        <span>{p}, </span>
                                          
                                    );
                                })}</p>

            <button onClick= {() => setPontuacao( Pontuar(pontuacao, 1))}>Pontuar Dupla 1</button> &nbsp;  &nbsp;
            <button onClick= {() => setPontuacao( Pontuar(pontuacao, 2))}>Pontuar Dupla 2</button>

            <hr />
        </div>
    )
}

export default AtualizarJogo