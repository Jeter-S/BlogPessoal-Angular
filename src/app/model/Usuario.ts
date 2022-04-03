import { postagem } from "./Postagem";

export class Usuario{
    public id: number;
    public nome: string;
    public idade: number;
    public foto: string;
    public tipo: string;
    public usuario: string;
    public senha: string;
    public postagem: postagem[];
}