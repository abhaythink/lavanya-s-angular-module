import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-resuable-component',
  templateUrl: './resuable-component.component.html',
  styleUrl: './resuable-component.component.css'
})
export class ResuableComponentComponent {

  @Input() item:any;
  // @Input() data: { name: string; email: string }[] = [];



}
