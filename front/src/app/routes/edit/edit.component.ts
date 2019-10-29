import { Component, OnInit } from '@angular/core';
import Editor from "tui-editor";
import { EditService } from 'src/app/routes/edit/edit.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  tuiEditor: any;
  tuiEditorInstance: any;

  constructor(
      private _service: EditService
  ) { }

  ngOnInit() {
    this.tuiEditor         = <any>Editor;
    this.tuiEditorInstance = new this.tuiEditor({
      el: document.querySelector('#editorSection'),
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      height: '500px',
      hooks: {
        addImageBlobHook: (...args) => {
          console.log('console', args);
          
          // api와 통신후 이미지 추가
        }
      }
    });
  }

  onSave(): void {
    const html = this.tuiEditorInstance.getHtml();
    console.log('onSave \n', html);
    // this._service.requestEditArticle({})
  }
}
