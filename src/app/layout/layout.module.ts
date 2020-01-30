import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [LayoutComponent, ToolbarComponent, PageNotFoundComponent]
})
export class LayoutModule { 
  
}
