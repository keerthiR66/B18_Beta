import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {DataserviceService} from 'src/app/service/dataservice.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false;
  login: FormGroup;
  hide =true;
  constructor(private formbuilder: FormBuilder, private http: HttpClient,private router:Router, public DataserviceService:DataserviceService) {
    this.login = this.formbuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
    });
  }
  // public loginForm = new FormGroup({
  //   username: new FormControl('',Validators.required),
  //   password: new FormControl('',Validators.required)
  // })
  // login: any;
  // router: any;
  // constructor() { }

  ngOnInit() {
  }
  get f() { 
    return this.login.controls; 
  }
  onSubmitForm(data: any) {
    console.log(data)
    this.http.post('https://bookcart.azurewebsites.net/api/Login', data).subscribe((res: any) => {
      localStorage.setItem('authToken', res.token);
      localStorage.setItem('userId', res.userDetails.userId);
      localStorage.setItem('username', res.userDetails.username);
      this.DataserviceService.userDetails.next({
        name: res.userDetails.username,
    });
      this.router.navigate(['/dashboard'])
    })
  //   let userlogin=[];
  //  let emailid= this.login.value.email;
  //  let pswd= this.login.value.password;
  //  let existinguser=localStorage.getItem('authToken');
  //  if(existinguser)
  //  {
  //    userlogin=JSON.parse(existinguser);
  //       }
  //   let allowlogin=userlogin.filter((item: any)=> item.email == emailid && item.password == pswd);
  //   if(allowlogin.length)
  //   {
  //     Swal.fire({
  //       position: 'top',
  //       icon: 'success',
  //       title:'logged in sucessfully',
  //       showConfirmButton: true,
  //     });
  //     return;
  //     }
  //     Swal.fire({
  //       position: 'top',
  //       icon: 'warning',
  //       title:'login failed',
  //       showConfirmButton: true,
  //     });
          
    }
  register(){
    this.router.navigate(['/register'])
  }
}
