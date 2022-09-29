import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router,private active:ActivatedRoute) { }

  ngOnInit(): void {
  }
  createAccount(){
    this.router.navigate(['activate'])
  }

}
