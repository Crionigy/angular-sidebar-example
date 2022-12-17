import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { FeaturesRoutingModule } from './features-routing.module';

@NgModule({
  imports: [
    FeaturesRoutingModule
  ],
  exports: [],
  declarations: [
    HomeComponent
  ],
  providers: [],
})
export class FeaturesModule { }
