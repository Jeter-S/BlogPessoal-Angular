import { postagem } from "./Postagem";

export class Tema{
    public id: number;
    public descricao: string;
    public postagem: postagem[];
}