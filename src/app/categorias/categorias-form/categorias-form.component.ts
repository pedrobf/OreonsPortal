import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Category } from './../../models/Category';
import { CategoriaService } from '../categoria.service';
import { SubCategory } from 'src/app/models/SubCategory';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-categorias-form',
  templateUrl: './categorias-form.component.html',
  styleUrls: ['./categorias-form.component.css']
})
export class CategoriasFormComponent implements OnInit {
  categoriaForm: FormGroup;
  subCategoria: FormArray;
  id: string = undefined;
  idSubcategory: string = undefined;

  constructor(private service: CategoriaService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.categoriaForm = this.formBuilder.group({
      description: ['', Validators.required],
      childrensCategory: this.formBuilder.array([])
    });

    this.route.queryParams.subscribe(params => {
      if (params.id) {
        this.id = params.id;
        this.service.getCategory(params.id).subscribe(category => {
          this.categoriaForm.controls['description'].setValue(category.description);
          this.subCategoria = this.categoriaForm.get('childrensCategory') as FormArray;
          category.childrensCategory.forEach(c => {
            this.subCategoria.push(this.createSubCategory(c.id, c.level, c.description));
          })
        });
      }
    });
  }

  createCategory(id?:string, desc?: string): FormGroup {
    return this.formBuilder.group({
      id: id || '',
      description: [desc || '', Validators.required]
    });
  }

  createSubCategory(id?: string, level?: number, desc?: string): FormGroup {
    return this.formBuilder.group({
      id: id || '',
      level: [level || '', Validators.required],
      description:  [desc || '', Validators.required]
    })
  }

  addSubCategory() {
    this.subCategoria = this.categoriaForm.get('childrensCategory') as FormArray;
    this.subCategoria.push(this.createSubCategory());
  }

  removeSubCategory(index: number, id?: string, level?: number): void {
    this.subCategoria = this.categoriaForm.get('childrensCategory') as FormArray;
    this.subCategoria.removeAt(index);
    if (id != null && level != null) {
      this.service.deleteSubCategory(id, level).subscribe(
        response => {
          if (response.status === 200) {
            this.router.navigate(['/Categorias']);
          }
        });
    }
  }

  onSubmit(): void {
    let category = new Category(this.id, this.categoriaForm.controls['description'].value);
    category.childrensCategory = [];

    if (this.subCategoria != undefined) {
      for (let value of this.subCategoria.value) {
        category.childrensCategory.push(new SubCategory(this.idSubcategory, value.level, value.description));
      }
    }
    this.service.createCategory(category).subscribe(
      response => {
        if (response.status === 200) {
          this.router.navigate(['/Categorias']);
        }
      });
  }
}
