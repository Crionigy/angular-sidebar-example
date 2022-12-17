import { NgModule, Optional, SkipSelf } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { throwIfAlreadyLoaded } from './guard/throw-already-loaded.guard';
import { HeaderComponent } from './modules/header/header.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
  ],
  providers: [],
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
      throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
