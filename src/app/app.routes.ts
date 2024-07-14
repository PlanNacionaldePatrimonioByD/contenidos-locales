import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridListComponent } from './grid-list/grid-list.component';
import { IntroComponent } from './intro/intro.component';
import { DetalleComponent } from './detalle/detalle.component';

export const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  { path: 'explorar', component: GridListComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'detalle/:id', component: DetalleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
