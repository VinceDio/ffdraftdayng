import { Component, OnInit } from '@angular/core';
import { DraftService } from '../draft.service';
import { DraftPick } from '../models/draft-pick';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {

  public draft: any;
  public picks: DraftPick[];
  public players: any;
  public currentPick: any;

  constructor(private svc: DraftService) { 
    svc.get(1).subscribe((data: any) => this.draft = data);
    svc.getPicks(1).subscribe((data: DraftPick[]) => this.picks = data);
    svc.getPlayers(1).subscribe((data: any) => this.players = data);
  }

  ngOnInit(): void {
  }

  getCurrentPicks(): any {
    console.log(this.picks);
    let begPick = this.currentPick - 2;
    if (begPick < 0) begPick = 0;
    let endPick = this.currentPick + 3;
    if (endPick > this.picks.length - 1) endPick = this.picks.length - 1;
    let upcomingPicks = this.picks.slice(begPick, endPick);
    return upcomingPicks;
  }

}
