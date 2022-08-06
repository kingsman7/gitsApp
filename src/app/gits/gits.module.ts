import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitsPageComponent } from './gits-page/gits-page.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';



@NgModule({
  declarations: [
    GitsPageComponent,
    SearchComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GitsPageComponent
  ]
})
export class GitsModule { }
