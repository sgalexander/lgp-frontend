import { LgpStats } from './lgp-stats';
import { LgpObjectQualities } from './lgp-object-qualities';
import { LgpEnchants } from './lgp-enchants';

export class LgpEquipment {
  id: number;
  name: string;
  primaryStat: {
    stat: LgpStats
    value: number
  };
  secondaryStat: {
    stat: LgpStats
    value: number
  };
  property?: string;
  level: number;
  quality: LgpObjectQualities;
  enchant: LgpEnchants;
  enchantStat1?: {
    stat: LgpStats
    value: number
  }
  enchantStat2?: {
    stat: LgpStats
    value: number
  }
  enchantStat3?: {
    stat: LgpStats
    value: number
  }
}
