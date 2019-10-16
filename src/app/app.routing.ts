import { Routes, RouterModule } from '@angular/router';

import { CategoriasListComponent } from './categorias/categorias-list/categorias-list.component';
import { CategoriasDetailComponent } from './categorias/categorias-detail/categorias-detail.component';
import { CategoriasFormComponent } from './categorias/categorias-form/categorias-form.component';
import { ProdutosListComponent } from './produtos/produtos-list/produtos-list.component';
import { ProdutosFormComponent } from './produtos/produtos-form/produtos-form.component';
import { ProdutosDetailComponent } from './produtos/produtos-detail/produtos-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'Categorias', pathMatch: 'full' },
  { path: 'Categorias', component: CategoriasListComponent },
  { path: 'Produtos', component: ProdutosListComponent },
  { path: 'Produtos/Novo', component: ProdutosFormComponent },
  { path: 'Produto/:id', component: ProdutosDetailComponent },
  { path: 'Categorias/Nova', component: CategoriasFormComponent },
  { path: 'Categoria/:id', component: CategoriasDetailComponent }
];

export const AppRoutes = RouterModule.forRoot(routes);
