import { mergeNsAndName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
}
employee=[{

      {id:1,
      name:'meena',
      age:20,
      salary:10},
      {
        id:2,
        name:'surya',
      }






}]

}
