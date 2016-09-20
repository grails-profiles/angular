import {Component} from '@angular/core';
import {NavService} from './nav.service';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  applicationData: any;

  constructor(private navService: NavService) { }

  ngOnInit(): void {
    this.navService.getNavData().subscribe(res => this.applicationData = res);
  }
}
