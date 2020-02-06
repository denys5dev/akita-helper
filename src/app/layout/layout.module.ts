import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LayoutStore } from './store/layout.store';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [LayoutComponent, ToolbarComponent, PageNotFoundComponent],
  providers: [LayoutStore]
})
export class LayoutModule { 
  
}
