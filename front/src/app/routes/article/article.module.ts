import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { ReplyModule } from 'src/app/routes/article/reply/reply.module';
import { ArticleService } from 'src/app/routes/article/article.service';


@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    ReplyModule,
    ArticleRoutingModule
  ],
  providers: [
    ArticleService
  ]
})
export class ArticleModule { }
