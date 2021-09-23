import { AuthService } from './../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private message: NzMessageService
    ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email,Validators.required]],
      password: [null, [Validators.required]]
    });
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    this.authService.login(this.validateForm.value).subscribe((res:any)=>{
      let data = {token: res.accessToken,id: res._id};
      localStorage.setItem('user',JSON.stringify(data));
      this.message.create('success', `Login Success!`);
      this.router.navigate(['../home'],{relativeTo:this.activeRoute});
    })
  }
}
