import { Component, OnInit, OnDestroy } from '@angular/core';
import { DraftService } from '../draft.service';
import { DraftPick } from '../models/draft-pick';
import { observable, Observable, Subscription } from 'rxjs';
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
  public upcomingPicks: DraftPick[];
  public selectedTeam: Team;
  public $selectedTeamPlayers: Observable<Player[]>;
  public selectedTeamPlayers: Player[];
  
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
    this.draft$.pipe(
      map(draft => 
        {
            this.currentPick = draft.currentPick;
        })
    );
    this.draft$.subscribe(data => 
      {
        this.currentPick = data.currentPick;
        this.upcomingPicks = this.getUpcomingPicks();
        if (!this.selectedTeam) 
        { 
          this.selectedTeam = this.currentPick.team;
          this.getSelectedTeamPlayers();
        }
      }
    );

  }

  getUpcomingPicks(): DraftPick[] {
    let begPick = this.currentPick.overallPick - 3;
    if (begPick < 0) begPick = 0;
    let endPick = this.currentPick.overallPick + 3;
    if (endPick > this.picks.length - 1) endPick = this.picks.length - 1;
    let upcomingPicks = this.picks.slice(begPick, endPick);
    return upcomingPicks;
  }

  getSelectedTeamPlayers() {
    let players = this.picks.filter(p => p.team.id == this.selectedTeam.id && p.player).map(p => p.player);
    this.selectedTeamPlayers = players;
  }

  draftPlayer(selectedPlayer: Player) {
    this.currentPick.player = selectedPlayer;
    this.svc.postPick(this.draft.id, this.currentPick).subscribe();
    this.draft$.subscribe(draft => this.draft = draft);
    this.currentPick = this.draft.currentPick;
    this.upcomingPicks = this.getUpcomingPicks();
  }

  selectTeam(team: Team) {
      this.selectedTeam = team;
      this.getSelectedTeamPlayers();
  }
}
