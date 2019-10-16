import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { ProdutoService } from './../produto.service';
import { Products } from 'src/app/models/Products';

@Component({
  selector: 'app-produtos-detail',
  templateUrl: './produtos-detail.component.html',
  styleUrls: ['./produtos-detail.component.css']
})
export class ProdutosDetailComponent implements OnInit {
  id: string;
  produto: Products;
  inscricao: Subscription;

  constructor(
    private service: ProdutoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.service.getProduct(this.id).subscribe((product: any) => {
        this.produto = product;
      });
      if (this.produto === null) {
        this.router.navigate(['/Produtos']);
      }
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  deleteProduct(): void {
    let id = this.route.params.subscribe((params: any) => {
      return this.id = params['id'];
    });
    this.service.deleteProduct(this.id).subscribe(response => {
      if (response.status === 200) {
        this.router.navigate(['/Produtos']);
      }
    });
  }

}
