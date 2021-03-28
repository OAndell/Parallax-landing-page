import { AfterViewInit, Component } from '@angular/core';

import { AnimationService } from '../animation-service/animation.service';

@Component({
    selector: 'landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements AfterViewInit {
    constructor(private animationService: AnimationService) {}

    public onClick(): void {
        this.animationService.scrollToMainPage();
    }

    public ngAfterViewInit() {
        const gsap = this.animationService.getGsap();

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        });

        gsap.utils.toArray('.parallax').forEach((layer) => {
            const depth = layer.dataset.depth;
            const movement = -(layer.offsetHeight * depth);
            tl.to(layer, { y: movement, ease: 'none' }, 0);
        });
    }
}
