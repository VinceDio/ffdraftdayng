import { Component, OnInit, OnDestroy } from '@angular/core';
import { DraftService } from '../draft.service';
import { DraftPick } from '../models/draft-pick';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Draft } from '../models/draft';
import { Team } from '../models/team';
import { Player } from '../models/player';
import { PlayerListComponent } from '../player-list/player-list.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {

  public draft$: Observable<Draft>;
  private draft: Draft;
  public currentPick$: Observable<DraftPick>;
  public picks: DraftPick[];
  public players: Player[];
  public currentPick: DraftPick;
  
  constructor(
    private svc: DraftService, 
    private route: ActivatedRoute 
  ) { }

  ngOnInit(): void {
    const draftId: number = +this.route.snapshot.paramMap.get('id');
    this.draft$ = this.svc.getDraft(draftId);
    this.draft$.subscribe(draft => this.draft = draft);
    this.svc.getPicks(draftId).subscribe(data => this.picks = data);
    this.svc.getPlayers(draftId).subscribe(data => this.players = data);
    this.currentPick$ = this.draft$.pipe(
      map(draft => draft.currentPick)
    );
    this.draft$.subscribe(data => this.currentPick = data.currentPick);
  }

  getCurrentPicks(): DraftPick[] {
    let begPick = this.currentPick.overallPick - 3;
    if (begPick < 0) begPick = 0;
    let endPick = this.currentPick.overallPick + 3;
    if (endPick > this.picks.length - 1) endPick = this.picks.length - 1;
    let upcomingPicks = this.picks.slice(begPick, endPick);
    return upcomingPicks;
  }

  getCurrentTeamPlayers(): Player[] {
    let teamPlayers: Player[] = [];
    teamPlayers.push({ "name": "Vinnie D", "position" : "RB", "id" : 1, "bye": 1, "nflTeam" : "PIT", "rank" : 1 });
    return teamPlayers;
  }

  draftPlayer(selectedPlayer: Player) {
    this.currentPick.player = selectedPlayer;
    this.svc.postPick(this.draft.id, this.currentPick).subscribe();
    this.draft$.subscribe(draft => this.draft = draft);
    this.currentPick = this.draft.currentPick;
  }
}
