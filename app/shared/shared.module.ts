import {NgModule} from '@angular/core';
import {StarComponent} from './star.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

@NgModule({
    imports: [CommonModule],
    declarations: [StarComponent],
    exports: [CommonModule, FormsModule, StarComponent, BrowserModule, HttpModule]
})

export class SharedModule {}
