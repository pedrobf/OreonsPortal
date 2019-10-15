import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { ProdutoService } from './../produto.service';
import { CategoriaService } from './../../categorias/categoria.service';
import { Category } from './../../models/Category';
import { Products } from 'src/app/models/Products';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.css']
})
export class ProdutosFormComponent implements OnInit {
  category: Category[] = [];
  products: Products;
  productForm: FormGroup;

  constructor(private service: ProdutoService, 
              private categoriaService: CategoriaService, 
              private FormBuilder: FormBuilder, 
              private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.productForm = this.FormBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      sellingPrice: [0, Validators.required],
      categoryId: ['', Validators.required],
      childrenCategoryId: ['']
    });

    this.categoriaService.getAllCategories().subscribe(categories => {
      console.log(categories);
      this.category = categories;
    });
  }

  onSubmit(): void {
    let product = new Products();
    product.name = this.productForm.controls['name'].value;
    product.description = this.productForm.controls['description'].value;
    product.sellingPrice = this.productForm.controls['sellingPrice'].value;
    product.categoryId = this.productForm.controls['categoryId'].value;
    debugger
    this.service.createProduct(product).subscribe(response => {
      if (response.status === 200) {
        this.router.navigate(['/Produtos']);
      }
    })
  }

}
