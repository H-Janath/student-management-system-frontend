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
    this.http = HttpClient;
  }
  public Student={
    firstName:null,
    lastName:null,
    contactNumber:null
  }
}
