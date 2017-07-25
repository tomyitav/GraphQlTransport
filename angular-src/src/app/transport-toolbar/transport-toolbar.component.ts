import {Component, OnInit} from "@angular/core";
import {Router, NavigationEnd} from "@angular/router";

@Component({
  selector: 'app-transport-toolbar',
  templateUrl: './transport-toolbar.component.html',
  styleUrls: ['./transport-toolbar.component.css']
})
export class TransportToolbarComponent implements OnInit {

  readonly activeClass = ['nav-item', 'active'];
  readonly nonActiveClass = ['nav-item'];
  carClass = this.activeClass;
  trainClass = this.nonActiveClass;
  constructor(private _router:Router) { }

  ngOnInit() {
    this._router.events.subscribe((event:any) => {
      if(event instanceof NavigationEnd) {
        this.setActiveItemByState(event);
      }
    });
  }

  private setActiveItemByState(event: any) {
    if (event.url === '/cars') {
      this.carClass = this.activeClass;
      this.trainClass = this.nonActiveClass;
    }
    else if (event.url === '/trains') {
      this.trainClass = this.activeClass;
      this.carClass = this.nonActiveClass;
    }
  }
}
