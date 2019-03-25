import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-with-list',
  templateUrl: './toggle-with-list.component.html',
  styleUrls: ['./toggle-with-list.component.css']
})
export class ToggleWithListComponent implements OnInit {
  showSecret = false;
  log = [];

  constructor() { }

  ngOnInit() {
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }

}
