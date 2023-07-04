export class PontuacaoModel{
    pontuacao1: number;
    games1: number;
    sets1: number;
    pontuacao2: number;
    games2: number;
    sets2: number;
    placar: string[];

    constructor( pontuacao1:number, games1: number, sets1: number, pontuacao2:number, games2: number, sets2: number, placar: string[]){
        this.pontuacao1 = pontuacao1;
        this.games1 = games1;
        this.sets1 = sets1;
        this.pontuacao2 = pontuacao2;
        this.games2 = games2;
        this.sets2 = sets2;
        this.placar = placar;
    }

}