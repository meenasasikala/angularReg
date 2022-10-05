import { Component, Input, OnInit } from '@angular/core';
import { PatternValidator, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
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

  data: FormGroup;
  // isDisabled: boolean = false;

  constructor(private router: Router,
    private active: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private fb: FormBuilder) {
    this.data = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(5)]],
      mobilenumber: [null, [Validators.required, Validators.maxLength(10)]]
    })
  }


  ngOnInit(): void {

    // this.data=new FormGroup({
    //   name: new FormControl(null,[Validators.required]),
    //   email: new FormControl(null,[Validators.required,Validators.email]),
    //   password:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    //   mobilenumber:new FormControl(null,[Validators.required,Validators.maxLength(10),Validators.pattern("^[0-9]*$")])
    //   })

  }

  ngOnChanges(): void {

   

  }




  get form() {
    return this.data.controls
  }


  createAccount(e:any) {
    console.log(e.stopPropagation() )
    // this.isDisabled = true
    console.log('clicked');

    if (this.data.invalid) {
      return this.data.markAllAsTouched()
    }


    // this.data.touched;
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      accept: () => {

        this.messageService.add({ key: 'c', severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
        this.router.navigate(['signup2'])
      },
      reject: () => {
        this.messageService.add({ key: 'c', severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });





  }

}
