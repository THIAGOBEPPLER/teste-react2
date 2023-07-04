import { PontuacaoModel } from "../../Models/PontuacaoModel";

export default function Pontuar(pontuacao: PontuacaoModel, duplaPontuar:number){

    let novaPontuacao = { ...pontuacao} 

    console.log(pontuacao);

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
                // fechar game
                novaPontuacao.pontuacao1 = 0 
                novaPontuacao.pontuacao2 = 0 
                novaPontuacao.games1 ++; 
                break;
        }
    
        if(novaPontuacao.games1 == 6){
    
            novaPontuacao.placar.push(String(novaPontuacao.games1).concat("/", String(novaPontuacao.games2)))
            novaPontuacao.games1 = 0
            novaPontuacao.games2 = 0
            novaPontuacao.sets1 ++

        }
        
        if(novaPontuacao.sets1 == 2)
        novaPontuacao.sets1 = 0

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
                // fechar game
                novaPontuacao.pontuacao2 = 0 
                novaPontuacao.pontuacao1 = 0 
                novaPontuacao.games2 ++; 
                break;
        }
    
        if(novaPontuacao.games2 == 6){
    
            novaPontuacao.placar.push(String(novaPontuacao.games1).concat("/", String(novaPontuacao.games2)))
            novaPontuacao.games2 = 0
            novaPontuacao.games1 = 0
            novaPontuacao.sets2 ++
        }
        
        if(novaPontuacao.sets2 == 2)
        novaPontuacao.sets2 = 0


    }

    console.log(novaPontuacao)

    return(novaPontuacao)
}