import { Component, Input, OnInit } from '@angular/core';
import { PatternValidator, FormControl, Validators,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PopupService } from '@ng-bootstrap/ng-bootstrap/util/popup';
import { ConfirmationService, Message } from 'primeng/api';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  data:any;

  constructor(private router:Router,
              private active:ActivatedRoute,
              private confirmationService:ConfirmationService,
              private messageService:MessageService) { }
  @Input()

  ngOnInit(): void {
  
  
  this.data=new FormGroup({
    name: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    mobilenumber:new FormControl(null,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    })
  }
  
  
  
  
  get form(){
   return this.data.controls
  }
createAccount(){
console.log('clicked')
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      accept: () => { 
        this.messageService.add({ key:'c', severity:'info', summary:'Confirmed', detail:'You have accepted'});
      this.router.navigate(['signup2'])
      } ,
      reject: () => {
        this.messageService.add({key:'c',severity:'error', summary:'Rejected', detail:'You have rejected'});
      }
      
  });
  }

}
