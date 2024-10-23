import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularBasic';
  displayval=''
  disable=false;
  name='Lavanya';
  list:any[]=[];
  
  data=10;
  data1="x";
  uname:any;
  pipeex="Pipes in angular"
  today=Date();




  getData(){
    console.warn("Function is called !!");
  }


  getData1(value:string){
    console.warn(value);
    this.displayval=value
  }

  add(item:string){
    this.list.push({id:this.list.length,name:item});
    console.warn(this.list)
  }

  remove(id:number){
        console.warn(id);
        this.list=this.list.filter(item=>item.id!==id)
  }
// pass data child to component
  updateValue(){
    this.data=Math.floor(Math.random()*10)
  }
  
  //reusable component
  Details=[
    {name:'Lavanya',email:'lavanya@gmail.com'},
    {name:'Abc',email:'abc@gmail.com'},
    {name:'pqr',email:'pqr@gmail.com'},
    {name:'xyz',email:'xyz@gmail.com'},
  ]

  //send data child to parent component
  updateData(item:string){
    console.warn(item);
    this.data1=item;
  }



}
