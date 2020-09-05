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
 
  }

  ngOnInit(): void {
    this.svc.get(1).subscribe(data => this.draft = data);
    this.svc.getPicks(1).subscribe(data => this.picks = data);
    this.svc.getPlayers(1).subscribe(data => this.players = data);
  }

  getCurrentPicks(): DraftPick[] {
    console.log(this.draft);
    console.log(this.picks);
    this.currentPick = this.draft.currentPick;
    let begPick = this.currentPick - 3;
    if (begPick < 0) begPick = 0;
    let endPick = this.currentPick + 3;
    if (endPick > this.picks.length - 1) endPick = this.picks.length - 1;
    let upcomingPicks = this.picks.slice(begPick, endPick);
    return upcomingPicks;
  }

}
