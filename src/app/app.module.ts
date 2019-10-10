import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LgpPairingsComponent } from './pages/lgp-pairings/lgp-pairings.component';
import { LgpHeroComponent } from './components/lgp-hero/lgp-hero.component';
import { LgpMyAccountComponent } from './pages/lgp-my-account/lgp-my-account.component';
import { LgpHeroAvatarComponent } from './components/lgp-hero-avatar/lgp-hero-avatar.component';
import { LgpFactionPipe } from './pipes/lgp-faction.pipe';
import { LgpMyHeroPipe } from './pipes/lgp-my-hero.pipe';
import { LgpInfoComponent } from './pages/lgp-info/lgp-info.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LgpFactionHasTowerPipe } from './pipes/lgp-faction-has-tower.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LgpPairingsComponent,
    LgpHeroComponent,
    LgpMyAccountComponent,
    LgpHeroAvatarComponent,
    LgpFactionPipe,
    LgpMyHeroPipe,
    LgpInfoComponent,
    LgpFactionHasTowerPipe
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
