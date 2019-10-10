import { Pipe, PipeTransform } from '@angular/core';
import { LgpHeroObject } from '../models/lgp-hero-object';

@Pipe({
  name: 'lgpMyHero'
})
export class LgpMyHeroPipe implements PipeTransform {

  transform(heroes: LgpHeroObject[], myHeroes?: any): any {
    if (!heroes || !myHeroes){
      return heroes;
    }
    return heroes.filter(hero => myHeroes[hero.name] === true);  
  }

}
