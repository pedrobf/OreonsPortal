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
  id: string;
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
      this.category = categories;
    });

    this.route.queryParams.subscribe(params => {
      if (params.id) {
        this.id = params.id;
        this.service.getProduct(params.id).subscribe(product => {
          this.productForm.controls['name'].setValue(product.name);
          this.productForm.controls['description'].setValue(product.description);
          this.productForm.controls['sellingPrice'].setValue(product.sellingPrice);
          this.productForm.controls['categoryId'].setValue(product.categoryId);
        })
      }
    })
  }

  onSubmit(): void {
    let product = new Products();
    product.id = this.id;
    product.name = this.productForm.controls['name'].value;
    product.description = this.productForm.controls['description'].value;
    product.sellingPrice = this.productForm.controls['sellingPrice'].value;
    product.categoryId = this.productForm.controls['categoryId'].value;
    this.service.createProduct(product).subscribe(response => {
      if (response.status === 200) {
        this.router.navigate(['/Produtos']);
      }
    })
  }

}
