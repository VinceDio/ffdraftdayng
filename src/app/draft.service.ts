import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DraftPick } from './models/draft-pick';
import { Player } from './models/player';
import { Draft } from './models/draft';
import { Observable } from 'rxjs';
import { DraftComponent } from './draft/draft.component';


@Injectable({
  providedIn: 'root'
})
export class DraftService implements OnInit {


  private headers: HttpHeaders;
  private apiRoot: string = 'https://localhost:44378/api/drafts/';

  constructor(private http: HttpClient) { 
   
  }

  
  ngOnInit() {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'}); 
  }

  public get(id: number): Observable<Draft> {
    return this.http.get<Draft>(this.apiRoot + id.toString(), {headers: this.headers});
  }

  public getPicks(draftId: number): Observable<DraftPick[]> {
    return this.http.get<DraftPick[]>(this.apiRoot + draftId.toString() + '/picks', {headers: this.headers });
  }

  public getPlayers(draftId: number) {
    return this.http.get<Player[]>(this.apiRoot + draftId.toString() + '/players', { headers: this.headers });
  }
}
