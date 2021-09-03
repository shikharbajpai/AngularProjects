import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';


@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.css']
})
export class CkeditorComponent implements OnInit {
  public Editor = ClassicEditor;
  constructor() { }

  ngOnInit(): void {
    // DecoupledEditor
    //   .create(document.querySelector('.document-editor__editable'), {
    //     cloudServices: {

    //     }
    //   })
    //   .then(editor => {
    //     const toolbarContainer = document.querySelector('.document-editor__toolbar');

    //     toolbarContainer.appendChild(editor.ui.view.toolbar.element);

    //     // window.editor = editor;
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
  }


}
