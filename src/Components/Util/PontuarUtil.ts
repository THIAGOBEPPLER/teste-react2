import { PontuacaoModel } from "../../Models/PontuacaoModel";

export default function Pontuar(pontuacao: PontuacaoModel, duplaPontuar: number){

    let novaPontuacao = { ...pontuacao} 

    if(novaPontuacao.sets1 == 1  && novaPontuacao.sets2 == 1)
        return PontuarTieBreacao(novaPontuacao,duplaPontuar)

    if(novaPontuacao.games1 == 6 && novaPontuacao.games2 == 6)
        return PontuarTieBreak(novaPontuacao, duplaPontuar);

    if(duplaPontuar == 1){

        switch (novaPontuacao.pontuacao1) {
            case 0:
                novaPontuacao.pontuacao1 = 15
                break;
    
            case 15:
                novaPontuacao.pontuacao1 = 30
                break;
    
            case 30:
                novaPontuacao.pontuacao1 = 40
                break;
    
            case 40:
                novaPontuacao.pontuacao1 = 0 
                novaPontuacao.pontuacao2 = 0 
                novaPontuacao.games1 ++; 
                break;
        }
    
        if(novaPontuacao.games1 >= 6 && (Math.abs(novaPontuacao.games1 - novaPontuacao.games2) > 1)){
    
            novaPontuacao.placar.push(String(novaPontuacao.games1).concat("/", String(novaPontuacao.games2)))
            novaPontuacao.games1 = 0
            novaPontuacao.games2 = 0
            novaPontuacao.sets1 ++

        }
        
    }
    else{

        switch (novaPontuacao.pontuacao2) {
            case 0:
                novaPontuacao.pontuacao2 = 15
                break;
    
            case 15:
                novaPontuacao.pontuacao2 = 30
                break;
    
            case 30:
                novaPontuacao.pontuacao2 = 40
                break;
    
            case 40:
                novaPontuacao.pontuacao2 = 0 
                novaPontuacao.pontuacao1 = 0 
                novaPontuacao.games2 ++; 
                break;
        }
    
        if(novaPontuacao.games2 >= 6 && (Math.abs(novaPontuacao.games1 - novaPontuacao.games2) > 1)){
    
            novaPontuacao.placar.push(String(novaPontuacao.games1).concat("/", String(novaPontuacao.games2)))
            novaPontuacao.games2 = 0
            novaPontuacao.games1 = 0
            novaPontuacao.sets2 ++
        }
        
    }

    if(ValidarFinalJogo(novaPontuacao))
        novaPontuacao.jogoFinalizado = true;

    return(novaPontuacao)
}

function PontuarTieBreak(pontuacao: PontuacaoModel, duplaPontuar: number){

    let novaPontuacao = { ...pontuacao} 

    if(duplaPontuar == 1){

        novaPontuacao.tieBreak1 ++;
        if(novaPontuacao.tieBreak1 >= 7 && Math.abs(novaPontuacao.tieBreak1 - novaPontuacao.tieBreak2) > 1 ){
            novaPontuacao.games1 ++;
            novaPontuacao.sets1 ++;
            novaPontuacao.placar.push(String(novaPontuacao.games1).concat("/", String(novaPontuacao.games2)));
            novaPontuacao.games1 = 0;
            novaPontuacao.games2 = 0;
            novaPontuacao.tieBreak1 = 0;
            novaPontuacao.tieBreak2 = 0;
        }

    }
    else{

        novaPontuacao.tieBreak2 ++;
        if(novaPontuacao.tieBreak2 >= 7 && Math.abs(novaPontuacao.tieBreak1 - novaPontuacao.tieBreak2) > 1 ){
            novaPontuacao.games2 ++;
            novaPontuacao.sets2 ++;
            novaPontuacao.placar.push(String(novaPontuacao.games1).concat("/", String(novaPontuacao.games2)));
            novaPontuacao.games1 = 0;
            novaPontuacao.games2 = 0;
            novaPontuacao.tieBreak1 = 0;
            novaPontuacao.tieBreak2 = 0;
        }
    }

    if(ValidarFinalJogo(novaPontuacao))
        novaPontuacao.jogoFinalizado = true;

    return(novaPontuacao);
}

function PontuarTieBreacao(pontuacao: PontuacaoModel, duplaPontuar: number){

    let novaPontuacao = { ...pontuacao} 

    if(duplaPontuar == 1){

        novaPontuacao.tieBreak1 ++;
        if(novaPontuacao.tieBreak1 >= 10 && Math.abs(novaPontuacao.tieBreak1 - novaPontuacao.tieBreak2) > 1 ){
            novaPontuacao.sets1 ++;
            novaPontuacao.placar.push(String(novaPontuacao.tieBreak1).concat("/", String(novaPontuacao.tieBreak2)));
            novaPontuacao.tieBreak1 = 0;
            novaPontuacao.tieBreak2 = 0;
        }

    }
    else{

        novaPontuacao.tieBreak2 ++;
        if(novaPontuacao.tieBreak2 >= 10 && Math.abs(novaPontuacao.tieBreak1 - novaPontuacao.tieBreak2) > 1 ){
            novaPontuacao.sets2 ++;
            novaPontuacao.placar.push(String(novaPontuacao.tieBreak1).concat("/", String(novaPontuacao.tieBreak2)));
            novaPontuacao.tieBreak1 = 0;
            novaPontuacao.tieBreak2 = 0;
        }
    }

    if(ValidarFinalJogo(novaPontuacao))
        novaPontuacao.jogoFinalizado = true;

    return(novaPontuacao)
}

function ValidarFinalJogo(pontuacao: PontuacaoModel)
{
    debugger;
    if(pontuacao.sets1 == 2 || pontuacao.sets2 == 2){
        return true;
    }

    else
        return false;
}