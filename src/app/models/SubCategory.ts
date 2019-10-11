export class SubCategory {
    id?: string;
    description: string;
    level: number;

    constructor(level?: number, description: string = null) {
        this.level = level;
        this.description = description;
    }
}
