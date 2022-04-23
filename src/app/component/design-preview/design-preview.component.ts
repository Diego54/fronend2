import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-design-preview',
  templateUrl: './design-preview.component.html',
  styleUrls: ['./design-preview.component.css']
})
export class DesignPreviewComponent implements OnInit {

  @Input() design: File;

  constructor() { }

  ngOnInit() {
  }

}
