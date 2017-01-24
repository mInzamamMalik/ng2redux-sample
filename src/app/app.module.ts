import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CounterActions } from '../app/counter.actions';
import { NgReduxModule, DevToolsExtension } from 'ng2-redux';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgReduxModule
    ],
    providers: [CounterActions],
    bootstrap: [AppComponent]
})
export class AppModule { }
