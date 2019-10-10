import { Pipe, PipeTransform } from '@angular/core';
import { LgpHeroObject } from '../models/lgp-hero-object';

@Pipe({
  name: 'lgpFaction'
})
export class LgpFactionPipe implements PipeTransform {

  transform(heroes: LgpHeroObject[], faction?: string, showAllHealers?: boolean): any {
    if (!heroes || !faction){
      return heroes;
    }
    let filteredHeroes = heroes.filter(hero => hero[faction] === true);
    let offFactionHealers = heroes.filter(hero => !hero[faction] && hero['isHealer'] === showAllHealers);
    let combinedArray = filteredHeroes.concat(offFactionHealers);

    return showAllHealers ? combinedArray : filteredHeroes;
  }

}
