import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { LgpHeroObject } from '../lgp-hero-object';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'lgp-pairings',
  templateUrl: './lgp-pairings.component.html',
  styleUrls: ['./lgp-pairings.component.scss']
})
export class LgpPairingsComponent implements OnInit {

  public myHeroes: any;
  public heroes: LgpHeroObject[];
  public factions: any;
  public showUnavailable: boolean = true;
  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
    forkJoin(
      this.accountService.getMyHeroes(),
      this.accountService.getHeroesList(),
      this.accountService.getFactions(),
      this.accountService.getUnavailableHeroes()
    ).subscribe((res)=>{
      this.myHeroes = res[0];
      this.heroes = res[1];
      this.factions = res[2];
    })
  }

  getMyHeroes(){
    this.accountService.getMyHeroes().subscribe((res) => {
      this.myHeroes = res;
    });
  }

  getHeroes(){
    this.accountService.getHeroesList().subscribe((res) => {
      this.heroes = res;
    });
  }

  toggleAvailability(hero: LgpHeroObject){
    this.accountService.toggleHeroAvailability(hero);
  }

  isUnavailable(hero: LgpHeroObject) : boolean {
    return this.accountService.heroAvailable(hero.name);
  }

  resetAvailability(){
    this.accountService.saveUnavailableHeroes(true);
  }
}
