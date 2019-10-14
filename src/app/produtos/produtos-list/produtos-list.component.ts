import { Component, OnInit } from '@angular/core';

import { ProdutoService } from '../produto.service';


@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css']
})
export class ProdutosListComponent implements OnInit {
  products: any[];

  constructor(private service: ProdutoService) { }

  ngOnInit() {
    this.service.getAllProdutcts().subscribe(products => {
      this.products = products;
    });
  }

}
