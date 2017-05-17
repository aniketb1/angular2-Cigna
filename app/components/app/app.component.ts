import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {CountriesComponent} from './countries.component'


@Component({
    selector: 'my-app',
    template: '<h1>Cigna-Test</h1><countries></countries>',    
    directives: [CountriesComponent]
})
export class AppComponent { }