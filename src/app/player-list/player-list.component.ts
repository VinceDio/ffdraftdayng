import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DraftPick } from '../models/draft-pick';
import { Player } from '../models/player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  @Input() players: any;
  @Output() draftedPlayer: EventEmitter<Player> = new EventEmitter<Player>();
  
  public selectedPlayer : Player;

  constructor() { }

  ngOnInit(): void {

  }

  public SelectPlayer(player : Player)  {
    this.selectedPlayer = player;
  }

  public DraftPlayer(player: Player) {
    this.draftedPlayer.emit(player);
  }

}
