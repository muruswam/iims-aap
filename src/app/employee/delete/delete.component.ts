import { Component,
         Output,
         ElementRef,
         OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  searchText = "";
  public  name: string;
  constructor(private elementRef: ElementRef) {
        const eventStream = Observable.fromEvent(elementRef.nativeElement, 'keyup').map(() => this.name).debounceTime(500).distinctUntilChanged();
        eventStream.subscribe(input => this.searchText = input);
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
