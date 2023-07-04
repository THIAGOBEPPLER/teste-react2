import { PontuacaoModel } from "../../Models/PontuacaoModel";

export default function Pontuar(pontuacao: PontuacaoModel){

    switch (pontuacao.pontuacao) {
        case 0:
            pontuacao.pontuacao = 15
            break;

        case 15:
            pontuacao.pontuacao = 30
            break;

        case 30:
            pontuacao.pontuacao = 40
            break;

        case 40:
            // fechar game
            pontuacao.pontuacao = 0 
            pontuacao.games ++; 
            break;
    }

    if(pontuacao.games == 6){

        pontuacao.games = 0
        pontuacao.sets ++
    }
    
    if(pontuacao.sets == 2)
        pontuacao.sets = 0

    let novaPontuacao = { ...pontuacao} 

    return(novaPontuacao)
}