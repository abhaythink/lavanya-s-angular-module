import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {


  title='Template Driven Form';

  logForm(formValues: any) {
    console.log('Form Submitted!', formValues);
  
}


}
