import { Injectable } from '@angular/core';
import { LgpHeroObject } from './models/lgp-hero-object';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient
  ) { }
  
  heroes: LgpHeroObject[] = [];
  myHeroes = {};
  unavailableHeroes = {};

  getMyHeroes() : Observable<any> {
    let heroes = localStorage.getItem('myheroes');
    if(heroes){
      this.myHeroes = JSON.parse(heroes);
    }
    return of(this.myHeroes);
  }

  getUnavailableHeroes() : Observable<any> {
    let heroes = localStorage.getItem('myunavailableheroes');
    if(heroes){
      this.unavailableHeroes = JSON.parse(heroes);
    }
    return of(this.unavailableHeroes);
  }

  getFactions() : Observable<any> {
    return this.http.get('/assets/json/factions.json');
  }

  saveMyHeroes() {
    localStorage.setItem('myheroes', JSON.stringify(this.myHeroes));
  }

  saveUnavailableHeroes(reset = false) {
    if (reset){
      this.unavailableHeroes = {};
    }
    localStorage.setItem('myunavailableheroes', JSON.stringify( this.unavailableHeroes ));
  }

  getHeroesList() : Observable<any> {
    return this.http.get('/assets/json/heroes.json');
  }

  heroOwned(name) : boolean {
    if(this.myHeroes != {}){
      return !!this.myHeroes[name];
    } else {
      this.getMyHeroes().subscribe(() => {
        return !!this.myHeroes[name];
      })
    }
  }

  heroAvailable(name) : boolean {
    if(this.unavailableHeroes != {}){
      return !!this.unavailableHeroes[name];
    } else {
      this.getUnavailableHeroes().subscribe(() => {
        return !!this.unavailableHeroes[name];
      })
    }
  }

  toggleHeroAvailability(hero : LgpHeroObject){
    this.unavailableHeroes[hero.name] = !this.unavailableHeroes[hero.name];
    this.saveUnavailableHeroes();
  }

  toggleHero(hero : LgpHeroObject){
    this.myHeroes[hero.name] = !this.myHeroes[hero.name];
    this.saveMyHeroes();
  }

}
