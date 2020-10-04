import { Component, OnInit, OnDestroy } from '@angular/core';
import { DraftService } from '../draft.service';
import { DraftPick } from '../models/draft-pick';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Draft } from '../models/draft';
import { Team } from '../models/team';
import { Player } from '../models/player';
import { PlayerListComponent } from '../player-list/player-list.component';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {

  public draft$: Observable<Draft>;
  public currentPickNo$: Observable<number>;
  public picks: DraftPick[];
  public players: Player[];
  public currentPick: number;
  
  constructor(private svc: DraftService) { 
 
  }

  ngOnInit(): void {
    this.draft$ = this.svc.get(1);
    this.svc.getPicks(1).subscribe(data => this.picks = data);
    this.svc.getPlayers(1).subscribe(data => this.players = data);
    this.currentPickNo$ = this.draft$.pipe(
      map(draft => draft.currentPick)
    );
    this.draft$.subscribe(data => this.currentPick = data.currentPick);
  }

  getCurrentPicks(): DraftPick[] {
    let begPick = this.currentPick - 3;
    if (begPick < 0) begPick = 0;
    let endPick = this.currentPick + 3;
    if (endPick > this.picks.length - 1) endPick = this.picks.length - 1;
    let upcomingPicks = this.picks.slice(begPick, endPick);
    return upcomingPicks;
  }

  getCurrentTeamPlayers(): Player[] {
    let teamPlayers: Player[] = [];
    teamPlayers.push({ "name": "Vinnie D", "position" : "RB", "id" : 1, "bye": 1, "nflTeam" : "PIT", "rank" : 1 });
    return teamPlayers;
  }
}
