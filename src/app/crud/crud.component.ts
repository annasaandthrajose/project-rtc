import { HttpClient } from '@angular/common/http';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
userid=""
id=""
title=""
body=""
  constructor(private http:HttpClient,private router:Router) { }
   addnew(){
    return this.http.get<any>("http://jsonplaceholder.typicode.com/posts/1")
.subscribe((result:any)=>{
  if(result){
    console.log(result);
    
    //alert(result.title)
     this.userid=result.userId
     this.id=result.id
     this.title=result.title
     this.body=result.body

    
  }

})

     }
      
   edit(){
     alert("hi")
     this.router.navigateByUrl("home")
   }
   delete(){
     alert("are you sure want to delete")
     this.userid=""
     this.id=""
    this.title=""
    this.body=""

   }
  ngOnInit(): void {
    
  }
  
}
