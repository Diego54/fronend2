import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor() { }

  ngOnInit() {
  }

  @ViewChild('snav')
  private sidenav: any;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.sidenav.open();
    }, 250);
  }

}
