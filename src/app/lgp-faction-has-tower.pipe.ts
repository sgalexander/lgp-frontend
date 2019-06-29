import { Pipe, PipeTransform } from '@angular/core';
import { LgpFactionObject } from './lgp-faction-object';

@Pipe({
  name: 'lgpFactionHasTower'
})
export class LgpFactionHasTowerPipe implements PipeTransform {

  transform(factions: LgpFactionObject[], args?: any): any {
    //Take the factions
    //Return it only if it has a tower
    return factions.filter(faction => faction.hasTower);
  }

}
