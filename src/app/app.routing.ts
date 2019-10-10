import { Routes, RouterModule } from '@angular/router';

import { CategoriasListComponent } from './categorias/categorias-list/categorias-list.component';
import { CategoriasDetailComponent } from './categorias/categorias-detail/categorias-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'Categorias', pathMatch: 'full' },
  { path: 'Categorias', component: CategoriasListComponent },
  { path: 'Categoria/:id', component: CategoriasDetailComponent }
];

export const AppRoutes = RouterModule.forRoot(routes);
