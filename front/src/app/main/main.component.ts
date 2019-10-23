import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log($);

    const options: Summernote.Options = {
      placeholder: 'Hello stand alone ui',
      tabsize: 2,
      height: 100,
      callbacks: {
        onImageUpload: function(files) {
          // upload image to server and create imgNode...
          // 파일 통신후 url 집어 넣어서 img Element 만든후에 summerNote에 넣어주기

          console.log('files', files);

          // 이것도 가능
          // var image = $('<img>').attr('src', '/assets/chickens.JPG');
          // $('#summernote').summernote("insertNode", image[0]);

          // 이것도 가능
          const imgElement = <HTMLImageElement>document.createElement("IMG");
          imgElement.src = '/assets/chickens.JPG';

          $('#summernote').summernote("insertNode", imgElement);
        }
      }
    };

    $('#summernote').summernote(options);
  }

}
