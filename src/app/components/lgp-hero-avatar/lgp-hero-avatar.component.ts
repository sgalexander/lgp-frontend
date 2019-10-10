import { Component, OnInit, Input } from '@angular/core';
import { LgpHeroObject } from '../../models/lgp-hero-object';
import { LgpObjectQualities } from '../../enums/lgp-object-qualities';

@Component({
  selector: 'lgp-hero-avatar',
  templateUrl: './lgp-hero-avatar.component.html',
  styleUrls: ['./lgp-hero-avatar.component.scss']
})
export class LgpHeroAvatarComponent implements OnInit {


  @Input() hero: LgpHeroObject;
  @Input() showDisabled: boolean = true;
  @Input() showFactionIcons: boolean = true;
  @Input() size: string = 'medium';
  @Input() showBuffIcon: string;
  qualities = LgpObjectQualities;

  constructor() { }

  ngOnInit() {
  }

}
