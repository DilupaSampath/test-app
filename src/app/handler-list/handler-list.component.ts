import { Component, OnInit , Input , ElementRef , ViewChild} from '@angular/core';

@Component({
  selector: 'app-handler-list',
  templateUrl: './handler-list.component.html',
  styleUrls: ['./handler-list.component.css']
})
export class HandlerListComponent implements OnInit {
@Input('inputElement') element : {name : string, type : string, content : string};
@ViewChild('heading') header : ElementRef;
constructor() { }

  ngOnInit() {
    console.log(this.header.nativeElement.textContent);
  }

}
