import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.css']
})
export class CategoriasListComponent implements OnInit {
  categorias: any[];

  constructor(private service: CategoriaService, private router: Router) {}

  ngOnInit() {
    this.service.getAllCategories().subscribe(categories => {
      this.categorias = categories;
    });
  }
}
