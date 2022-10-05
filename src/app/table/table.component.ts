import { mergeNsAndName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {TableModule} from 'primeng/table';
import { ServiceService } from '../service.service';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
employee:any
  constructor(private appservice:ServiceService) { }

  ngOnInit(): void {
   this.getuser()
        
  }
  getuser(){
    this.appservice.getUser().subscribe((result)=>{
      this.employee=result
      console.log(this.employee);
  })
}
}