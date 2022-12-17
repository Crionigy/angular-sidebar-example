import { NgModule, Optional, SkipSelf } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { throwIfAlreadyLoaded } from './guard/throw-already-loaded.guard';
import { HeaderComponent } from './modules/header/header.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { ContentBodyComponent } from './modules/content-body/content-body.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    ContentBodyComponent
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    ContentBodyComponent
  ],
  providers: [],
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
      throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
