import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { CategoriaService } from './../categoria.service';

@Component({
  selector: 'app-categorias-detail',
  templateUrl: './categorias-detail.component.html',
  styleUrls: ['./categorias-detail.component.css']
})
export class CategoriasDetailComponent implements OnInit {
  id: string;
  categoria: any;
  inscricao: Subscription;

  constructor(
    private service: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.service.getCategory(this.id).subscribe((cat: any) => {
        this.categoria = cat;
      });
      if (this.categoria === null) {
        this.router.navigate(['/Categorias']);
      }
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  deleteCategory(): void {
    let id = this.route.params.subscribe((params: any) => {
      return this.id = params['id'];
    });
    this.service.deleteCategory(this.id).subscribe(
      response => {
        if (response.status === 200) {
          this.router.navigate(['/Categorias']);
        }
      }
    )
  }
}
