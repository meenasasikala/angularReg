import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  workers:any
  constructor(private appservice:ServiceService) { }

  ngOnInit(): void {
    // this.getuser()
    this.getData()
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
}}
