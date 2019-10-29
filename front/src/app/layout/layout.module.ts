import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutFooterComponent } from './footer/layout-footer.component';
import { LayoutHeaderComponent } from './header/layout-header.component';
import { LayoutModalComponent } from './modal/layout-modal.component';
import { LayoutSidebarComponent } from './sidebar/layout-sidebar.component';

@NgModule({
  declarations: [
    LayoutFooterComponent,
    LayoutHeaderComponent,
    LayoutModalComponent,
    LayoutSidebarComponent
  ],
  imports:      [
    CommonModule
  ]
})
export class LayoutModule {
}
