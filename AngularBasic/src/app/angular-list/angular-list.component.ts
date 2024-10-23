import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-list',
  template: `
    <h2 class="custom">
      Inline template works!
      <p>In Angular, an inline template allows you to define the HTML structure<br> of a component directly within the component's decorator instead of using a separate HTML file. <br>This can be useful for small components or when you want to keep everything contained in one place</p>
    </h2>
  `,
  styleUrl: './angular-list.component.css'
})
export class AngularListComponent {

}
