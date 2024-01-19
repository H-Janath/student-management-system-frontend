import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private http;
  constructor(private httpClient:HttpClient){
    this.http = httpClient;
  }
  public Student={
    firstName:null,
    lastName:null,
    contactNumber:null
  }
  createStudent(){
    this.http.post("http://localhost:8080/student",this.Student)
    .subscribe(data=>{
      console.log(data);
    })

  }
}
