import { Routes, RouterModule } from '@angular/router';

import { CategoriasListComponent } from './categorias/categorias-list/categorias-list.component';
import { CategoriasDetailComponent } from './categorias/categorias-detail/categorias-detail.component';
import { CategoriasFormComponent } from './categorias/categorias-form/categorias-form.component';
import { ProdutosListComponent } from './produtos/produtos-list/produtos-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'Categorias', pathMatch: 'full' },
  { path: 'Categorias', component: CategoriasListComponent },
  { path: 'Produtos', component: ProdutosListComponent },
  { path: 'Categorias/Nova', component: CategoriasFormComponent },
  { path: 'Categoria/:id', component: CategoriasDetailComponent }
];

export const AppRoutes = RouterModule.forRoot(routes);
