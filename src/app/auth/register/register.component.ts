import { AuthService } from './../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  validateForm!: FormGroup;
  isError: boolean = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private message: NzMessageService
    ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
    });
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    this.authService.register(this.validateForm.value).subscribe(
      res=>{
      this.isError = false;
      this.message.create('success', `Register Success!`);
      this.router.navigate(['../signin'],{relativeTo:this.activeRoute})
    },(error)=>{
   if(error.status!==200)  
      this.isError = true;
    })
  }

}
