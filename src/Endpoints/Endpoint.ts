import { environment } from './../environments/environment';

export class Endpoint {
  static readonly api = environment.API;

  public static getAllCategories(): string {
      return `${this.api}categories/all`;
  }

  public static getCategory(id: string): string {
      return `${this.api}categories/${id}`;
  }

  public static createCategory(): string {
      return `${this.api}categories`;
  }

  public static updateCategory(id: string): string {
      return `${this.api}categories/update/${id}`;
  }

  public static deleteCategory(id: string): string {
      return `${this.api}categories/${id}`;
  }

  public static deleteSubCategory(id: string, level: number): string {
      return `${this.api}categories/subcategory/${id}/${level}`;
  }
}
