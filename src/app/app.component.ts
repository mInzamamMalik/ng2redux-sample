import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { IAppState } from '../store';
import { CounterActions } from './counter.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';
    @select() counter$: Observable<number>;
    @select('counter') counterByName$: Observable<number>;

    constructor(
        public actions: CounterActions,
        private ngRedux: NgRedux<IAppState>) { }
}
