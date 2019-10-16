import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { CategoriasListComponent } from './categorias/categorias-list/categorias-list.component';
import { CategoriaService } from './categorias/categoria.service';
import { ProdutoService } from './produtos/produto.service';
import { CategoriasDetailComponent } from './categorias/categorias-detail/categorias-detail.component';
import { CategoriasFormComponent } from './categorias/categorias-form/categorias-form.component';
import { ProdutosListComponent } from './produtos/produtos-list/produtos-list.component';
import { ProdutosFormComponent } from './produtos/produtos-form/produtos-form.component';
import { ProdutosDetailComponent } from './produtos/produtos-detail/produtos-detail.component';


@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      CategoriasListComponent,
      CategoriasDetailComponent,
      CategoriasFormComponent,
      ProdutosListComponent,
      ProdutosFormComponent,
      ProdutosDetailComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutes
   ],
   providers: [CategoriaService, ProdutoService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
