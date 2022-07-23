import { Research } from "./research.model";

export class Bookmark {
    name: string;
    color: string;
    id: number;
    researches: Research[];

    constructor(){
        this.name = '';
        this.color = '';
        this.id = 0;
        this.researches = []
    }
}