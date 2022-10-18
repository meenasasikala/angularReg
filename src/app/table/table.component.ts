import { mergeNsAndName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {TableModule} from 'primeng/table';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  values:any
  name:any
  age:any
  salary:any
  constructor(private appservice:ServiceService,private product: Router) { }

  ngOnInit(): void {
   
        
  }
  // insert(){
  //   console.log('inside insert function')
  //   this.values={
  //     name:this.name,
  //     age:this.age,
  //     salary:this.salary
  //   }
  //   this.appservice.insert(this.values).subscribe(data=>{
  //     console.log(this.values);
  //     this.product.navigate(['product'])
      
  //   })
  // }
}