import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
value:any
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    return this.value
  }

}
