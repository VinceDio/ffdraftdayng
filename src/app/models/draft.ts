import { DraftPick } from './draft-pick';
import { Team } from './team';

export class Draft {
    public id: number;
    public name: string;
    public commissioner: string;
    public location: string;
    public startTime: Date;
    public clockSeconds: number;
    public status: string;
    public currentPick: DraftPick;
    public teams: Team[];

}
