import { Injectable } from '@angular/core';

export class DraftPick {
    public overallPick: number;
    public round: number;
    public selection: number;

    constructor(data) {
        this.overallPick = data.overallPick,
        this.round = data.round,
        this.selection = data.selection
    }
}
