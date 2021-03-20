import { Injectable } from "@angular/core";
import { SkillItem } from "./data.model";

@Injectable({
    providedIn: 'root',
})
export class DataService {

    public getSkillList(): SkillItem[] {
        return [
            {
                name: 'Android',
                level: 6,
            },
            {
                name: 'CSS',
                level: 5 
            },
            {
                name: 'TypeScript',
                level: 9 
            },
            {
                name: 'JavaScript',
                level: 8,
            },
            {
                name: 'Full-Stack',
                level: 4,
            },
            {
                name: 'Animation',
                level: 2,
            },
            {
                name: 'Angular',
                level: 9,
            },
            {
                name: 'HTML',
                level: 6,
            },
            {
                name: 'React',
                level: 3,
            },
            {
                name: 'Java',
                level: 7,
            },
            {
                name: 'Testing',
                level: 4,
            },
            {
                name: 'CI/CD',
                level: 3,
            },
            {
                name: 'RxJS',
                level: 7,
            },
            {
                name: 'ngrx',
                level: 5,
            },
            {
                name: 'SQL',
                level: 2,
            },
            {
                name: 'Azure',
                level: 4,
            },
            {
                name: 'Frontend',
                level: 8,
            },
            {
                name: 'AngularJS',
                level: 3,
            },
            {
                name: 'Node.js',
                level: 5,
            },
            {
                name: 'Kotlin',
                level: 2,
            }

        ]
    }

    public getProfileData(): any {
        return {
            location: 'Stockholm',
            employer: 'Vizlib',
            linkedIn: {
                text: 'LinkedIn',
                url: '',
            },
            github: {
                text: 'github/oandell',
                url: '',
            },
            reusume: {
                text: 'cv.pdf',
                url: '',
            },
            email: 'Oscar@andell.eus'
        }
    } 
}
