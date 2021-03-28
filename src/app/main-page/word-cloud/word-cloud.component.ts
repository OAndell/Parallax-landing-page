import { Component, OnInit } from '@angular/core';
import { SkillItem } from 'src/app/data-service/data.model';
import { DataService } from '../../data-service/data.service';
@Component({
    selector: 'word-cloud',
    templateUrl: './word-cloud.component.html',
    styleUrls: ['./word-cloud.component.scss'],
})
export class WordCloudComponent implements OnInit {
    public words!: SkillItem[];

    constructor(private dataService: DataService) {}

    public ngOnInit() {
        this.words = this.dataService.getSkillList();
    }
}
