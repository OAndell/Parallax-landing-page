import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data-service/data.service';

@Component({
    selector: 'profile-card',
    templateUrl: './profile-card.component.html',
    styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {
    public location!: string;
    public employer!: string;
    public github!: { text: string; url: string };
    public linkedIn!: { text: string; url: string };
    public cv!: { text: string; url: string };

    constructor(private dataService: DataService) {}

    public ngOnInit() {
        const data = this.dataService.getProfileData();
        this.location = data.location;
        this.employer = data.employer;
        this.github = data.github;
        this.linkedIn = data.linkedIn;
        this.cv = data.reusume;
    }
}
