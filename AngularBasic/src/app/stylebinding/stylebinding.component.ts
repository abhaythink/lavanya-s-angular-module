import { Component } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrl: './stylebinding.component.css'
})
export class StylebindingComponent {
  color="red";
  title="Style Binding"


  updatestyle(){
    this.color="blue";
    this.title="Dyanamic Style"

  }

}
