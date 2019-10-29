import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { EditService } from 'src/app/routes/edit/edit.service';


@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    EditRoutingModule
  ],
  providers: [
    EditService
  ]
})
export class EditModule { }
