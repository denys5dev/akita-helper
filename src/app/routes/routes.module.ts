import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './router';

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ]
})
export class RoutesModule { }
