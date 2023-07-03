import { DuplaModel } from "./Models/DuplaModel";
import { JogoModel } from "./Models/JogoModel"

import "./JogoTeste.css"

function JogoTeste(){

    let jogo = setJogo();

    let teste = jogo.placar;

    return(
        <div className="container">
            <div className="jogo">
                <div className="jogoMain">
                    <div className="dupla">
                        {/* <p> Dupla1: </p> */}
                        <p>{jogo.dupla1.jogador1} </p> 
                        <p>{jogo.dupla1.jogador2} </p> 
                    </div>

                    <div className="placar">

                        {teste.map((i) => {
                            return (
                                <p> {i}  </p>
                            );
                        })}
            
                    </div>

                    <div className="dupla">
                        {/* <p>Dupla2: </p> */}
                        <p>{jogo.dupla2.jogador1} </p> 
                        <p>{jogo.dupla2.jogador2} </p> 
                    </div>

                

                </div>

                <div className="jogoDesc">
                    <p>{jogo.categoria}</p>
                    <p>{jogo.fase}</p>
                    <p>{jogo.grupo}</p>

                </div>
            </div>
        </div>
        
        
    )
}

function setJogo(): JogoModel{

    let dupla1 = new DuplaModel("Francisco Fagner","Aurélio Frederico");
    let dupla2 = new DuplaModel("Júlio Quico","Ciro João");
    let placar = [ "6X2","4X6","10x2"];
    let categoria = "4ª Masculina";
    let fase = "Grupos";
    let grupo = "Grupo A";

    let jogo = new JogoModel(dupla1, dupla2, placar, categoria, fase, grupo);

    return jogo;
}

export default JogoTeste