import { Component, OnInit } from '@angular/core';
import { DraftService } from '../draft.service';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {

  public draft: any;
  public picks: any;
  public players: any;
  public currentPick: any;

  constructor(private svc: DraftService) { 
    svc.get(1).subscribe((data: any) => this.draft = data);
    svc.getPicks(1).subscribe((data: any) => this.picks = data);
    svc.getPlayers(1).subscribe((data: any) => this.players = data);
  }

  ngOnInit(): void {
  }

}
