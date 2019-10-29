import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'article',
    loadChildren: () => import('./routes/article/article.module').then(mod => mod.ArticleModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./routes/edit/edit.module').then(mod => mod.EditModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./routes/main/main.module').then(mod => mod.MainModule)
  },
  {
    path: 'mypage',
    loadChildren: () => import('./routes/mypage/mypage.module').then(mod => mod.MypageModule)
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
