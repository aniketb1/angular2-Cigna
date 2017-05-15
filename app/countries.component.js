System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var CountriesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CountriesComponent = (function () {
                function CountriesComponent(myElement) {
                    this.query = '';
                    this.countries = ["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus", "Belgium", "Bosnia & Herzegovina",
                        "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Georgia",
                        "Germany", "Greece", "Hungary", "Iceland", "India", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein",
                        "Lithuania", "Luxembourg", "Macedonia", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands",
                        "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia",
                        "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom", "Vatican City"];
                    this.filteredList = [];
                    this.elementRef = myElement;
                    this.selectedIdx = -1;
                }
                CountriesComponent.prototype.filter = function (event) {
                    if (this.query !== "") {
                        this.filteredList = this.countries.filter(function (el) {
                            return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                        }.bind(this));
                        if (event.code == "ArrowDown" && this.selectedIdx < this.filteredList.length) {
                            this.selectedIdx++;
                        }
                        else if (event.code == "ArrowUp" && this.selectedIdx > 0) {
                            this.selectedIdx--;
                        }
                    }
                    else {
                        this.filteredList = [];
                    }
                };
                CountriesComponent.prototype.select = function (item) {
                    this.query = item;
                    this.filteredList = [];
                    this.selectedIdx = -1;
                };
                CountriesComponent.prototype.handleBlur = function () {
                    if (this.selectedIdx > -1) {
                        this.query = this.filteredList[this.selectedIdx];
                    }
                    this.filteredList = [];
                    this.selectedIdx = -1;
                };
                CountriesComponent.prototype.handleClick = function (event) {
                    var clickedComponent = event.target;
                    var inside = false;
                    do {
                        if (clickedComponent === this.elementRef.nativeElement) {
                            inside = true;
                        }
                        clickedComponent = clickedComponent.parentNode;
                    } while (clickedComponent);
                    if (!inside) {
                        this.filteredList = [];
                    }
                    this.selectedIdx = -1;
                };
                CountriesComponent = __decorate([
                    core_1.Component({
                        selector: 'countries',
                        host: {
                            '(document:click)': 'handleClick($event)',
                        },
                        template: "\n        <div class=\"container\" >\n            <div class=\"input-field col s12\">\n            <label for=\"country\">Select Country</label>\n              <input id=\"country\" type=\"text\" class=\"validate filter-input\" [(ngModel)]=query (keyup)=filter($event)  (blur)=handleBlur()>\n              <button (click)=\"clicked()\">Search</button>\n            </div>\n            <div class=\"suggestions\" *ngIf=\"filteredList.length > 0\">\n                <ul *ngFor=\"#item of filteredList;#idx = index\" >\n                    <li [class.complete-selected]=\"idx == selectedIdx\">\n                        <a (click)=\"select(item)\">{{item}}</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    \t"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], CountriesComponent);
                return CountriesComponent;
            }());
            exports_1("CountriesComponent", CountriesComponent);
        }
    }
});
//# sourceMappingURL=countries.component.js.map