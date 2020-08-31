import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-current-pick',
  templateUrl: './current-pick.component.html',
  styleUrls: ['./current-pick.component.css']
})
export class CurrentPickComponent implements OnInit {

  @Input() picks: any;
  @Input() currentPick: number;

  constructor() { }

  ngOnInit(): void {
  }

}
