import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { CategoriasListComponent } from './categorias/categorias-list/categorias-list.component';
import { CategoriaService } from './categorias/categoria.service';
import { CategoriasDetailComponent } from './categorias/categorias-detail/categorias-detail.component';
import { CategoriasFormComponent } from './categorias/categorias-form/categorias-form.component';


@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      CategoriasListComponent,
      CategoriasDetailComponent,
      CategoriasFormComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutes
   ],
   providers: [CategoriaService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
