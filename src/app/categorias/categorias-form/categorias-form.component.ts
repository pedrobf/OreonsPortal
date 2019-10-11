import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Category } from './../../models/Category';
import { CategoriaService } from '../categoria.service';
import { SubCategory } from 'src/app/models/SubCategory';

@Component({
  selector: 'app-categorias-form',
  templateUrl: './categorias-form.component.html',
  styleUrls: ['./categorias-form.component.css']
})
export class CategoriasFormComponent implements OnInit {
  categoriaForm: FormGroup;
  subCategoria: FormArray;

  constructor(private service: CategoriaService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.categoriaForm = this.formBuilder.group({
      description: ['', Validators.required],
      childrensCategory: this.formBuilder.array([])
    });
  }

  createCategory(desc?: string): FormGroup {
    return this.formBuilder.group({
      description: [desc || '', Validators.required]
    });
  }

  addSubCategory() {
    this.subCategoria = this.categoriaForm.get('childrensCategory') as FormArray;
    this.subCategoria.push(this.createCategory());
  }

  removeSubCategory(index: number): void {
    this.subCategoria = this.categoriaForm.get('childrensCategory') as FormArray;
    this.subCategoria.removeAt(index);
  }

  onSubmit(): void {
    let category = new Category(this.categoriaForm.controls['description'].value);
    category.childrensCategory = [];

    for (let value of this.subCategoria.value) {
      category.childrensCategory.push(new SubCategory(value.level, value.description));
    }
    this.service.createCategory(category).subscribe(
      response => {
        if (response.status === 200) {
          this.router.navigate(['/Categorias']);
        }
      });
  }
}
