export class SubCategory {
    id?: string;
    description: string;
    level: number;

    constructor(id:string = null, level: number, description: string = null) {
        this.id = id;
        this.level = level;
        this.description = description;
    }
}
