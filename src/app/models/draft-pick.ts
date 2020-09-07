import { Injectable } from '@angular/core';
import { Team } from './team';

export class DraftPick {
    public overallPick: number;
    public round: number;
    public selection: number;
    public team: Team;
}
