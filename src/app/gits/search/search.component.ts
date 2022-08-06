import { Component, ElementRef, ViewChild } from '@angular/core';
import { GitsService } from '../services/gits.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

  constructor(private _gitsServices: GitsService){}
  
  @ViewChild('txtArgument') txtSearch!: ElementRef<HTMLInputElement>; 

  buscar():void {
    
    const valor = this.txtSearch.nativeElement.value
    if(valor.trim().length == 0 ) return;
    this._gitsServices.searchGits(valor)
    this.txtSearch.nativeElement.value = ''
  }

}
