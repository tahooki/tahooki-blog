import { Component, OnDestroy, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/routes/article/article.service';
import { ActivatedRoute } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import Editor from "tui-editor";

@Component({
  selector:    'app-article',
  templateUrl: './article.component.html',
  styleUrls:   ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy {

  tuiEditorInstance: any;

  isUnsubscribe: boolean = false;

  constructor(
      private _service: ArticleService,
      private _route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this._route.params
        .pipe(takeWhile(() => this.isUnsubscribe === false))
        .subscribe(params => {
          console.log('params', params);
        });

    this.tuiEditorInstance = Editor.factory({
      el: document.querySelector('#viewerSection'),
      viewer: true,
      height: '500px'
    });

    this.tuiEditorInstance.setValue('<p>asdasdasdasdasdasd</p>\n<p>good jab</p>')
  }

  ngOnDestroy(): void {
    this.isUnsubscribe = true;
  }

  onEdit(): void {

  }

  onDelete(): void {

  }

  private _requestArticle(): void {

  }

  private _requestReplyList(): void {

  }

  private _requestAddReply(): void {

  }
}
