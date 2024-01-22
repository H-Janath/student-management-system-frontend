import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit{

  public studentList : any;
  public http;
  constructor(private httpClient:HttpClient){
      this.http = httpClient;
  }
  ngOnInit(): void {
    this.loadStudent();
  }

  loadStudent(){
    this.http.get('http://localhost:8080/student')
    .subscribe((data)=>{
      console.log(data);
      this.studentList = data;
    })
  }

  public removeStudent(student:any){
    console.log(student);
    let apiUrl = "http://localhost:8080/student/"+student.id;
    this.http.delete(apiUrl)
    .subscribe(data=>{
      console.log(data)
    })
  }
}
