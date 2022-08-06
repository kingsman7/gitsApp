import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Git, ResponseGits } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class GitsService {

  constructor(private _http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || []
    this.gits = JSON.parse(localStorage.getItem('gits')!) || []
  }

  private _history : string[] = []
  private _apyKey  : string = 'XNLszfSFzidzg57AammCLr156zhsWW3T'
  public baseUrl   : string = 'https://api.giphy.com/v1/gifs'
  
  public gits  : Git[] = []
  
  get history(): string[] {
    return [...this._history]
  }

  set setHistory(params:[]) {
    this._history = params
  }

  
  searchGits(query:string): void{
    if(!this._history.some((item)=> item.toLowerCase().trim() === query.toLowerCase().trim())) {
      this._history.unshift(query)
      this._history = this._history.slice(0,10)
      localStorage.setItem('history', JSON.stringify(this._history))
    }
    
    const params = new HttpParams()
      .set('api_key', this._apyKey)
      .set('limit', '12')
      .set('q', query)

    this._http.get<ResponseGits>(`${this.baseUrl}/search`, { params })
    .subscribe((resp) =>{
        this.gits = resp.data
        localStorage.setItem('gits', JSON.stringify(this.gits))
      })
  }
}
