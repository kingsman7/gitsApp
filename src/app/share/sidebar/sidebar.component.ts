import { Component } from '@angular/core';
import { GitsService } from 'src/app/gits/services/gits.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  
  constructor(private _gitsService: GitsService) { }

  get histories():string[] {
    return this._gitsService.history
  }

  search(query:string):void {
    this._gitsService.searchGits(query)
  }

  deleteHistory():void{
    this._gitsService.setHistory = []
    localStorage.setItem('gits', JSON.stringify([]))
    localStorage.setItem('history', JSON.stringify([]))
  }
}
