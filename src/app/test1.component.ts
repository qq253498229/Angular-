import { Component, OnInit, VERSION } from '@angular/core';
import { interval } from 'rxjs';
import { AutoUnsubscribe } from './auto-unsubscribe.decorator';

@Component({
  selector: 'app-test1',
  template: 'test111111',
})
export class Test1Component implements OnInit {
  @AutoUnsubscribe() testObserver: any;
  ngOnInit(): void {
    this.testObserver = interval(500).subscribe(() => {
      console.log('执行啦');
    });
  }
}
