export class PontuacaoModel{
    pontuacao: number;
    games: number
    sets: number

    constructor( pontuacao:number, games: number, sets: number){
        this.pontuacao = pontuacao;
        this.games = games;
        this.sets = sets;
    }

}