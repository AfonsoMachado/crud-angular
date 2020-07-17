import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  get title(): string {
    // capturando o titulo atual
    return this.headerService.headerData.title
  }

  get icon(): string {
    // capturando o titulo atual
    return this.headerService.headerData.icon
  }

  get routeUrl(): string {
    // capturando o titulo atual
    return this.headerService.headerData.routeUrl
  }

}
