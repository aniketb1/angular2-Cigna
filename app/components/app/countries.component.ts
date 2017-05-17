import {Component, ElementRef} from 'angular2/core';
import {NameListService} from '../../services/nameList.service';

@Component({
    selector: 'countries',
    host: {
        '(document:click)': 'handleClick($event)',
    },    
    template: `
        <div class="container" >
            <div class="input-field col s12">
            <label for="country">Select a Country</label>
              <input id="country" type="text" class="validate filter-input" [(ngModel)]=query (keyup)=filter($event)  (blur)=handleBlur()>
              <button (click)="clicked()">Search</button>
            </div>
            <div class="suggestions" *ngIf="filteredList.length > 0">
                <ul *ngFor="#item of filteredList;#idx = index" >
                    <li [class.complete-selected]="idx == selectedIdx">
                        <a (click)="select(item)">{{item}}</a>
                    </li>
                </ul>
            </div>
        </div>
    	`,
        providers: [NameListService]
})

export class CountriesComponent {

    public query = '';    
    public filteredList = [];
    public elementRef;
    public countries : String[];
    countriesList: String[];
    selectedIdx: number;
    test: String;

    constructor(private _listService : NameListService){
      
    }
    ngOnInit(){
        this.countries = this._listService.getNames();
    }

 
    filter(event: any) {
        if (this.query !== "") {
            this.filteredList = this.countries.filter(function (el) {
                return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }.bind(this));
            if (event.code == "ArrowDown" && this.selectedIdx < this.filteredList.length) {
                this.selectedIdx++;
            } else if (event.code == "ArrowUp" && this.selectedIdx > 0) {
                this.selectedIdx--;
            }
        } else {
            this.filteredList = [];
        }
    }

    select(item) {
        this.query = item;
        this.filteredList = [];
        this.selectedIdx = -1;
    }

    handleBlur() {
        if (this.selectedIdx > -1) {
            this.query = this.filteredList[this.selectedIdx];
        }
        this.filteredList = [];
        this.selectedIdx = -1;
    }

    handleClick(event) {
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
    }


}