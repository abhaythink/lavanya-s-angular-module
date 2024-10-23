import { Component,OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-childtoparent',
  templateUrl: './childtoparent.component.html',
  styleUrl: './childtoparent.component.css'
})
export class ChildtoparentComponent implements OnInit{

@Output() updateDataEvent= new EventEmitter<string>(); 

  ngOnInit():void{

  }
  

}
