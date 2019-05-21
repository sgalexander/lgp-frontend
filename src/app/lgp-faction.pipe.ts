import { Pipe, PipeTransform } from '@angular/core';
import { LgpHeroObject } from './lgp-hero-object';

@Pipe({
  name: 'lgpFaction'
})
export class LgpFactionPipe implements PipeTransform {

  transform(heroes: LgpHeroObject[], faction?: any): any {
    if (!heroes || !faction){
      return heroes;
    }
    return heroes.filter(hero => hero[faction] === true);
  }

}
