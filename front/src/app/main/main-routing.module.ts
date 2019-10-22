import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from 'src/app/main/main.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: MainComponent
    }
  ])],
  exports: [RouterModule]
})
export class MainRoutingModule { }
