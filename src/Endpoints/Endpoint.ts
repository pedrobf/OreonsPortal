import { environment } from "./../environments/environment";

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

  public static getAllProducts(): string {
    return `${this.api}products/all`;
  }

  public static getProduct(id: string): string {
    return `${this.api}products/${id}`;
  }

  public static createProdutc(): string {
    return `${this.api}products`;
  }

  public static updateProduct(id: string): string {
    return `${this.api}products/update/${id}`;
  }

  public static deleteProduct(id: string): string {
    return `${this.api}products/${id}`;
  }
  
}
