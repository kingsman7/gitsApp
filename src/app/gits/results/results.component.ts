import { Component } from '@angular/core';
import { GitsService } from '../services/gits.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  constructor(private _gitsService: GitsService){}

  get gits() {
    return this._gitsService.gits
  }

}
