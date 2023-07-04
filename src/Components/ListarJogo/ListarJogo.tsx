import { DuplaModel } from "../../Models/DuplaModel";
import { JogoModel } from "../../Models/JogoModel"

import "./ListarJogo.css"

function ListarJogo(listaJogos: Array<JogoModel>){


    if(Object.keys(listaJogos).length === 0){

        let auxList = new Array<JogoModel>;

        auxList.push(setJogo());
        auxList.push(setJogo());
        auxList.push(setJogo());
        auxList.push(setJogo());
        auxList.push(setJogo());
        auxList.push(setJogo());
        auxList.push(setJogo());
        auxList.push(setJogo());
        auxList.push(setJogo());
        auxList.push(setJogo());


        listaJogos = auxList;
    }

    return(
        <div className="container" >

            {listaJogos.map((jogo)=> {
                return(

                    <div className="jogo">
                        <div className="jogoMain">
                            <div className="dupla">
                                <p> Dupla1: </p>
                                <p>{jogo.dupla1.jogador1} </p> 
                                <p>{jogo.dupla1.jogador2} </p> 
                            </div>

                            <div className="placar">

                                {jogo.placar.map((p) => {
                                    return (
                                        <p> {p}  </p>
                                    );
                                })}
                    
                            </div>

                            <div className="dupla">
                                <p>Dupla2: </p>
                                <p>{jogo.dupla2.jogador1} </p> 
                                <p>{jogo.dupla2.jogador2} </p> 
                            </div>

                        </div>

                        <div className="jogoDesc">
                            <p>Categoria: {jogo.categoria}</p>
                            <p>Fase: {jogo.fase} | {jogo.grupo}</p>
                        </div>
                    </div>
                )
            })}

            
        </div>
        
        
    )
}

function setJogo(): JogoModel{

    let dupla1 = new DuplaModel("Francisco Fagner","Aurélio Frederico");
    let dupla2 = new DuplaModel("Júlio Quico","Ciro João Pedro");
    let placar = [ "6X2","4X6","10x2"];
    let categoria = "4ª Masculina";
    let fase = "Grupos";
    let grupo = "Grupo A";

    let jogo = new JogoModel(dupla1, dupla2, placar, categoria, fase, grupo);

    return jogo;
}

export default ListarJogo