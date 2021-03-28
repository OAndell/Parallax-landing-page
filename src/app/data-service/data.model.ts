export interface SkillItem {
    name: string;
    level: number;
}

export interface ProfileData {
    location: string;
    employer: string;
    linkedIn: {
        text: string;
        url: string;
    };
    github: {
        text: string;
        url: string;
    };
    reusume: {
        text: string;
        url: string;
    };
    email: string;
}
