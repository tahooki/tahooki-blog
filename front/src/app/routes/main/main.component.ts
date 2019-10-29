import { Component, OnInit } from '@angular/core';
import Editor from 'tui-editor';
import { MainService } from 'src/app/routes/main/main.service';
import { Router } from '@angular/router';

@Component({
  selector:    'app-main',
  templateUrl: './main.component.html',
  styleUrls:   ['./main.component.scss']
})
export class MainComponent implements OnInit {

  articleList: any[];

  constructor(
      private _service: MainService,
      private _router: Router
  ) { }

  ngOnInit() {
  }

  onSave() {
  }

  onClickArticle() {
    this._router.navigateByUrl('/article');
  }

  private _requestArticleList(): void {
    this._service.requestArticleList({});
  }
}
