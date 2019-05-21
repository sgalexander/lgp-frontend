import { Component, OnInit } from '@angular/core';
import { LgpHeroObject } from '../lgp-hero-object';
import { AccountService } from '../account.service';

@Component({
  selector: 'lgp-my-account',
  templateUrl: './lgp-my-account.component.html',
  styleUrls: ['./lgp-my-account.component.scss']
})
export class LgpMyAccountComponent implements OnInit {

  heroes: LgpHeroObject[] = [];
  myHeroes : any;
  loading: boolean = true;
  constructor(
    private accountService: AccountService
  ){}
  
  ngOnInit() {
    this.getHeroes();
    this.getMyHeroes();
  }

  toggleHero(hero: LgpHeroObject){
    this.accountService.toggleHero(hero);
  }

  heroOwned(name) : boolean{
    return this.accountService.heroOwned(name);
  }

  getHeroes(){
    this.accountService.getHeroesList().subscribe((res) => {
      this.heroes = res;
    });
  }

  getMyHeroes(){
    this.accountService.getMyHeroes().subscribe((res) => {
      this.myHeroes = res;
    });
  }
  

}
