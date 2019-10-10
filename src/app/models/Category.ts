import { SubCategory } from './SubCategory';

export class Category {
    id?: string;
    description: string;
    childrensCategory: SubCategory[];
}
