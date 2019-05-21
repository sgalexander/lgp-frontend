import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LgpPairingsComponent } from './lgp-pairings/lgp-pairings.component';
import { LgpHeroComponent } from './lgp-hero/lgp-hero.component';
import { LgpMyAccountComponent } from './lgp-my-account/lgp-my-account.component';
import { LgpHeroAvatarComponent } from './lgp-hero-avatar/lgp-hero-avatar.component';
import { LgpFactionPipe } from './lgp-faction.pipe';
import { LgpMyHeroPipe } from './lgp-my-hero.pipe';
import { LgpInfoComponent } from './lgp-info/lgp-info.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    LgpPairingsComponent,
    LgpHeroComponent,
    LgpMyAccountComponent,
    LgpHeroAvatarComponent,
    LgpFactionPipe,
    LgpMyHeroPipe,
    LgpInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [
    LgpHeroAvatarComponent    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
