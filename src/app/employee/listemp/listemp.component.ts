import { Component, Output, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-listemp',
  templateUrl: './listemp.component.html',
  styleUrls: ['./listemp.component.scss']
})
export class ListempComponent implements OnInit {

  searchText = "first";
  public  name: string;
  constructor(private elementRef: ElementRef) {
      /*  const eventStream = Observable.fromEvent(elementRef.nativeElement, 'keyup').map(() => this.name).debounceTime(500).distinctUntilChanged();
        eventStream.subscribe(input => this.searchText = input);*/
  }

  ngOnInit() {
  }


  onSubmit(obj: any){
    console.log('submit button clicked', obj.value);
  }

  removeEmpDetail(evt){
    console.log(evt);
  }
}
