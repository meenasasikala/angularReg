import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  workers:any;
  cols:any[]=[];
  
  
  constructor(private appservice:ServiceService,private routing:Router,) { }

  ngOnInit(): void {
    // this.getuser()
    this.getData()
    this.cols =[
     { field:'name',header:'NAME'},
     { field:'age',header:'AGE'},
     { field:'salary',header: 'SALARY'}


    ]
  }
//   getuser(){
//     this.appservice.getUser().subscribe((result: any)=>{
//       this.data=result
//       console.log(this.data);
      
//   })

// }
getData(){
  console.log('inside getdatta function')
  this.appservice.getdata().subscribe((data:any)=>{
    this.workers=data
    console.log('getdata',data)
  })
}

// Adduser(){
//   this.routing.navigate(['/table'])
// }
edit(){
  this.routing.navigate(['/table',this.workers.id])
}

}

