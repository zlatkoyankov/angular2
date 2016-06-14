import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import Hero from './hero';
import  { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
    selector: 'ng-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit{

    heroes: Hero[];
    selectedHero:Hero;

    constructor(
        private router: Router,
        private heroService: HeroService) { }

    getHeroes() {
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }

    ngOnInit() {
        this.getHeroes();
    }

    gotoDetail() {
        this.router.navigate(['HeroDetail', { id: this.selectedHero.id }])
    }

}
