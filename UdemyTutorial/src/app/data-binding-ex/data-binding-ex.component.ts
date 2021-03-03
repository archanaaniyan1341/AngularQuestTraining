import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-ex',
  templateUrl: './data-binding-ex.component.html',
  styleUrls: ['./data-binding-ex.component.scss']
})
export class DataBindingExComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}