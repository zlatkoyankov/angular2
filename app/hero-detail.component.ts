import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { HeroService } from './hero.service';
import Hero from './hero';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html' 
})

export class HeroDetailComponent implements OnInit {
    hero: Hero;

    constructor(
        private heroService:HeroService,
        private routeParams: RouteParams
    ) {  }

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.heroService.getHero(id)
            .then( hero => this.hero = hero );
    }

    goBack() {
        window.history.back();
    }
}