import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../models/player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  @Input() players: any;
  
  public selectedPlayer : Player;

  constructor() { }

  ngOnInit(): void {

  }

  public SelectPlayer(player : Player)  {
    this.selectedPlayer = player;
  }

  public DraftPlayer(player: Player) {
    
  }

}
