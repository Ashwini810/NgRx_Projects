import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription, fromEvent,} from 'rxjs';

@Component({
  selector: 'app-reactive-extension',
  templateUrl: './reactive-extension.component.html',
  styleUrls: ['./reactive-extension.component.scss'],
})
export class ReactiveExtensionComponent implements OnInit {
  public rxjsOperators: string = 'FromEvent';
  public checkBoxChange$: Subscription;
  @ViewChild('fromEventOp') fromEventOp: ElementRef;
  @ViewChild('paraGraph') paraGraph: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  checkBoxClick() {
    let operatorName: string = '';
    this.checkBoxChange$ = fromEvent(
      this.fromEventOp.nativeElement,
      'change'
    ).subscribe((event: any) => {
      operatorName = event.target.name;
      if (event.target.checked) {
        switch (operatorName) {
          case 'fromEventOp': {
            this.rxjsOperators = 'Fromevent';
            this.paraGraph.nativeElement.innerHTML =
              'In order to fetch the event details of button we usally use documet.queryselectall and for that we will add eventlistner.But in Reactive extension Javascript libraray we have an operator called';
            break;
          }
          case 'takeLastOp': {
            this.rxjsOperators = 'Fromevent';
            this.paraGraph.nativeElement.innerHTML = '';
            break;
          }
        }
      } else {
        this.rxjsOperators = '';
        this.paraGraph.nativeElement.innerHTML = '';
      }
    });
  }

  ngOnDestroy() {
    if (this.checkBoxChange$) {
      this.checkBoxChange$.unsubscribe(); // Observable will emit the stream of data continouesly , so in order to avoid the memory likage we have unsubscribe the subscription
    }
  }
}
