import { LgpObjectQualities } from './lgp-object-qualities';
import { LgpEquipment } from './lgp-equipment';

export interface LgpHeroObject {
  name: string;
  id: number;
  quality: LgpObjectQualities;
  icon: string;
  level: number;
  owned?: boolean;
  stars: number;
  weapon?: LgpEquipment;
  body?: LgpEquipment;
  helm?: LgpEquipment;
  accessory?: LgpEquipment;
  empire?: boolean;
  origins?: boolean;
  dark?: boolean;
  meteor?: boolean;
  princess?: boolean;
  protagonists?: boolean;
  glory?: boolean;
  strategic?: boolean;  
}
