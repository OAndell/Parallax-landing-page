import { Injectable } from "@angular/core";
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin, TweenMax } from 'gsap/all';

@Injectable({
    providedIn: 'root',
})
export class AnimationService {

    private gsap!: any;

    constructor() {
        this.gsap = gsap;
        this.gsap.registerPlugin(ScrollTrigger);
        this.gsap.registerPlugin(ScrollToPlugin);
        this.gsap.registerPlugin(TweenMax);
    }

    public scrollToMainPage(){
        gsap.to(window, {scrollTo: '.main-page', duration: 2 });
    }

    public getGsap(): any {
        return this.gsap;
    }


}