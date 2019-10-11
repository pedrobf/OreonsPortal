import { SubCategory } from './SubCategory';

export class Category {
    id?: string;
    description: string;
    childrensCategory: SubCategory[];

    constructor(description: string = null) {
        this.description = description;
    }
}
