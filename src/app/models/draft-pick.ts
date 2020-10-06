import { Injectable } from '@angular/core';
import { Player } from './player';
import { Team } from './team';

export class DraftPick {
    public overallPick: number;
    public round: number;
    public selection: number;
    public team: Team;
    public player: Player;
    public isAutoPick: boolean;
}
