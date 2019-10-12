import { SubCategory } from './SubCategory';

export class Category {
    id?: string;
    description: string;
    childrensCategory: SubCategory[];

    constructor(id: string = null, description: string = null) {
        this.id = id;
        this.description = description;
    }
}
