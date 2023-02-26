import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { SquareComponent } from './square/square.component';
import { CircleComponent } from './circle/circle.component';
import { TriangleComponent } from './triangle/triangle.component';

const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: MainNavigationComponent,
  },
  { path: 'square-component', title: 'Square', component: SquareComponent },
  { path: 'circle-component', title: 'Circle', component: CircleComponent },
  {
    path: 'triangle-component',
    title: 'Triangle',
    component: TriangleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
