import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LgpMyAccountComponent } from './pages/lgp-my-account/lgp-my-account.component';
import { LgpHeroComponent } from './components/lgp-hero/lgp-hero.component';
import { LgpPairingsComponent } from './pages/lgp-pairings/lgp-pairings.component';
import { LgpInfoComponent } from './pages/lgp-info/lgp-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/info', pathMatch: 'full' },
  { path: 'myaccount', component: LgpMyAccountComponent },
  { path: 'guildwar', component: LgpPairingsComponent },
  { path: 'info', component: LgpInfoComponent},
  { path: 'hero/:name', component: LgpHeroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
