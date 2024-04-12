import { Endereco } from "./endereco";
import { Pessoa } from "./pessoa";

export class Cliente extends Pessoa implements IUsuario {
    
    private vip: boolean;

    
    public listarEnderecos(): Endereco[] {
        return [];
        //ainda falta a lógica
    }

    autenticar(): boolean {
        throw new Error("Method not implemented.");
    }

}