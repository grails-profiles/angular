import {Component, OnInit} from '@angular/core';
import {NavService} from "../nav";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  controllers: Array<Object>;

  constructor(private navService: NavService, private router: Router) { }

  ngOnInit(): void {
/*    this.navService.getNavData().subscribe(applicationData => {
      this.controllers = applicationData.controllers.sort((a: any, b: any) => {
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        } else {
          return 0;
        }
      });
    });*/
  }

  hasRoute(controllerName: string): boolean {
    return this.router.config.some((route: Route) => {
      if (route.path == controllerName) {
        return true;
      }
    });
  }
}
