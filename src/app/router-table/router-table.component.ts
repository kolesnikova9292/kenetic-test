import { Component, OnInit } from '@angular/core';
import {IRoute} from "../app.modeles";
import * as data from '../data.json';
import {from} from "rxjs";


@Component({
  selector: 'app-router-table',
  templateUrl: './router-table.component.html',
  styleUrls: ['./router-table.component.scss']
})
export class RouterTableComponent implements OnInit {

  routes: IRoute[] = []

  ngOnInit(): void {
    from(data).subscribe((route: IRoute) => {
      this.routes.push(route);
    })
  }
}
