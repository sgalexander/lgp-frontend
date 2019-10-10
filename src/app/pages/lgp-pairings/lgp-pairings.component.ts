import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { LgpHeroObject } from '../../models/lgp-hero-object';
import { forkJoin } from 'rxjs';
import { LgpFactionObject } from '../../models/lgp-faction-object';

@Component({
  selector: 'lgp-pairings',
  templateUrl: './lgp-pairings.component.html',
  styleUrls: ['./lgp-pairings.component.scss']
})
export class LgpPairingsComponent implements OnInit {

  public myHeroes: any;
  public heroes: LgpHeroObject[];
  public factions: LgpFactionObject[];
  public showUnavailable: boolean = true;
  public showAllHealers: boolean = true;
  public availableTowers = [];
  public shownFactions: LgpFactionObject[] = [];

  constructor(
    private accountService: AccountService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    forkJoin(
      this.accountService.getMyHeroes(),
      this.accountService.getHeroesList(),
      this.accountService.getFactions(),
      this.accountService.getUnavailableHeroes()
    ).subscribe((res) => {
      this.myHeroes = res[0];
      this.heroes = res[1] as LgpHeroObject[];
      this.factions = res[2] as LgpFactionObject[];
      let towers = localStorage.getItem('towers');
      if (towers) {
        this.availableTowers = JSON.parse(towers);
      }
      this.setShownFactions();
    });
  }

  getMyHeroes() {
    this.accountService.getMyHeroes().subscribe((res) => {
      this.myHeroes = res;
    });
  }

  getHeroes() {
    this.accountService.getHeroesList().subscribe((res) => {
      this.heroes = res;
    });
  }

  toggleAvailability(hero: LgpHeroObject) {
    this.accountService.toggleHeroAvailability(hero);
  }

  isUnavailable(hero: LgpHeroObject): boolean {
    return this.accountService.heroAvailable(hero.name);
  }

  resetAvailability() {
    this.accountService.saveUnavailableHeroes(true);
  }

  isNotSelected(factionKey: string){
    return this.availableTowers.includes(factionKey);
  }

  selectFaction(factionKey){
    let index = this.availableTowers.indexOf(factionKey);
    if (index === -1){
      this.availableTowers.push(factionKey);
    } else {
      this.availableTowers.splice(index, 1);
    }
    localStorage.setItem('towers', JSON.stringify(this.availableTowers));
    this.setShownFactions();
  }

  setShownFactions(){
    this.shownFactions = this.factions.filter(faction => faction && this.availableTowers.includes(faction.key));    
    this.changeDetector.detectChanges();
  }
}
