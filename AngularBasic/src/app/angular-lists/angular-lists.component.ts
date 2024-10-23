import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-lists',
  template: `
    <h2 class="custom">
      Inline Style and Inline Template Works.!!
      <br>
       <p>Inline styles apply only to the specific element they are defined on.
         This makes them <br> ideal for quick adjustments, but less suitable for
          consistent styling across multiple elements.</p>
      <br><p>In Angular, an inline template allows you to define the HTML structure<br> of a component directly within the component's decorator instead of using a separate HTML file. <br>This can be useful for small components or when you want to keep everything contained in one place</p>


      
    </h2>
  `,
  styles: `.custom{color:red;margin-top:25px;text-align:center;}`
})
export class AngularListsComponent {

}
