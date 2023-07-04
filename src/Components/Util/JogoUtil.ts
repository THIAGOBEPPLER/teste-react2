import { JogoModel } from "../../Models/JogoModel";
import { DuplaModel } from "../../Models/DuplaModel";

export default function setJogo(): JogoModel{

    let dupla1 = new DuplaModel("Francisco Fagner","Aurélio Frederico");
    let dupla2 = new DuplaModel("Júlio Quico","Ciro João Pedro");
    let placar = [ "6X2","4X6","10x2"];
    let categoria = "4ª Masculina";
    let fase = "Grupos";
    let grupo = "Grupo A";

    let jogo = new JogoModel(dupla1, dupla2, placar, categoria, fase, grupo);

    return jogo;
}