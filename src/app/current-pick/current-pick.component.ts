import { Component, OnInit, Input } from '@angular/core';
import { DraftPick } from '../models/draft-pick';

@Component({
  selector: 'app-current-pick',
  templateUrl: './current-pick.component.html',
  styleUrls: ['./current-pick.component.css']
})
export class CurrentPickComponent implements OnInit {

  @Input() picks: DraftPick[];
  @Input() currentPick: number;
 
  constructor() { }

  ngOnInit(): void {
  }

}
