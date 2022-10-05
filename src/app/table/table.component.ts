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
employee=[

      {'id':1,
      'name':'meena',
      'age':20,
      'salary':10
    },
      {
        id:2,
        name:'surya',
        age:21,
        salary:20
      },
    {
      id:3,
      name:'stalin',
      age:25,
      salary:30,

    },
  {
    id:4,
    name:'deva',
    age:22,
    salary:30,

  },
{
  id:5,
    name:'yogi',
    age:23,
    salary:30,

},
    
{
  id:6,
    name:'vijay',
    age:23,
    salary:30},

    {
      id:7,
        name:'vijay',
        age:23,
        salary:30},
  
  
  
  ]






}


